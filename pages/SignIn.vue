<template>
  <div class="signin-wrapper">
    <div class="signin-grid">
      <!-- Form Section -->
      <div class="form-section">
        <img src="/logo.png" alt="Champions Logo" class="form-logo" />

        <h2 class="form-title">Sign in</h2>
        <p class="form-subtitle">Please login to continue to your account.</p>

        <form @submit.prevent="loginUser">
          <div v-if="globalError" class="alert alert-danger">
            {{ globalError }}
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              v-model="form.email"
              placeholder="Enter your email"
              :disabled="showIsLoading"
            />
          </div>

          <div class="form-group password-group">
            <label>Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              placeholder="Enter your password"
              :disabled="showIsLoading"
            />
            <span class="toggle-password" @click="showPassword = !showPassword">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
          </div>

          <div class="form-check mb-3">
            <input
              type="checkbox"
              v-model="keepLoggedIn"
              id="keepLoggedIn"
              :disabled="showIsLoading"
            />
            <label for="keepLoggedIn">Keep me logged in</label>
          </div>

          <button type="submit" class="btn-submit" :disabled="showIsLoading">
            <span v-if="showIsLoading">
              <span class="spinner"></span>
              Signing in...
            </span>
            <span v-else>Sign in</span>
          </button>

          <button
            v-if="showResendVerification"
            class="btn-resend mt-3"
            type="button"
            @click="resendVerificationEmail"
            :disabled="isSending"
          >
            <span v-if="isSending">Resending...</span>
            <span v-else>Resend Verification Email</span>
          </button>
        </form>
      </div>

      <!-- Image Section -->
      <div class="image-section">
        <img src="/images/kids2.png" alt="Sign in banner" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";

definePageMeta({
  layout: "guest",
  middleware: ["$guest"],
});

const form = ref({
  email: "",
  password: "",
});
const globalError = ref("");
const showPassword = ref(false);
const { login, fetchUser } = useAuth();
const authStore = useAuthStore();

const showIsLoading = ref(false);
const showResendVerification = ref(false);
const isSending = ref(false);

const keepLoggedIn = ref(localStorage.getItem("keepLoggedIn") === "true");

const loginUser = async () => {
  globalError.value = "";
  showIsLoading.value = true;
  try {
    localStorage.setItem("keepLoggedIn", keepLoggedIn.value ? "true" : "false");

    const loginResponse = await login(
      form.value.email,
      form.value.password,
      keepLoggedIn.value
    );

    localStorage.setItem("user_role", loginResponse.role);

    await fetchUser(loginResponse.role);

    if (loginResponse.redirect.startsWith("http")) {
      // URL externe
      window.location.href = loginResponse.redirect; // si tu veux forcer un rechargement externe
      // OU
      navigateTo(loginResponse.redirect, { external: true }); // plus propre
    } else {
      // URL interne
      navigateTo(loginResponse.redirect);
    }
  } catch (err) {
    if (err.response?.status === 401) {
      globalError.value = "Invalid credentials.";
    } else {
      globalError.value = "Unexpected error: " + err.message;
    }
  } finally {
    showIsLoading.value = false;
  }
};
</script>

<style scoped>
.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(134, 194, 66, 0.952);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: middle;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.signin-wrapper {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.signin-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 920px;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.form-section {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-logo {
  width: 80px;
  margin-bottom: 20px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
}

.form-subtitle {
  color: #777;
  font-size: 14px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
}

.form-group label {
  margin-bottom: 6px;
  color: #555;
  font-weight: 500;
}

.form-group input {
  padding: 10px;
  border-radius: 6px;
  border: 2px solid #ccc;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #d2910a;
}

.password-group .toggle-password {
  position: absolute;
  right: 10px;
  top: 38px;
  color: #999;
  cursor: pointer;
}

.form-check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #444;
}

.form-check input[type="checkbox"] {
  accent-color: #d2910a;
}

.btn-submit {
  background-color: #d2910a;
  border: none;
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: #b17908;
}

.btn-submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.image-section {
  background-color: #f9f9f9;
}

.image-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.alert {
  padding: 10px;
  background-color: #f8d7da;
  color: #842029;
  border-radius: 6px;
  margin-bottom: 15px;
}

.btn-resend {
  background-color: #f0ad4e;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-resend:hover {
  background-color: #ec9d2f;
}
</style>
