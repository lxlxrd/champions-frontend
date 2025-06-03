<template>
  <div class="register-wrapper">
    <div class="register-grid">
      <!-- En-tête -->
      <div class="form-header text-center mb-4">
        <img src="/logo.png" alt="Champions Logo" class="form-logo" />
        <h3 class="form-title">Register</h3>
        <p class="form-subtitle">Sign up to enjoy the feature of Revolutie</p>
      </div>

      {{ user }}
      <!-- Formulaire -->
      <div class="form-container card">
        <div class="card-body">
          <!-- Radio Switch -->
          <div class="mb-4 d-flex gap-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="showParent"
                value="parent"
                v-model="formSection"
              />
              <label class="form-check-label" for="showParent">Parent Information</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="showPlayer"
                value="player"
                v-model="formSection"
              />
              <label class="form-check-label" for="showPlayer">Player Information</label>
            </div>
          </div>

          <form @submit.prevent="registerUser">
            <!-- Erreur globale si données manquantes -->
            <div v-if="globalError" class="alert alert-danger">
              {{ globalError }}
            </div>

            <!-- Section Parent -->
            <div v-if="formSection === 'parent'">
              <h5 class="mb-3 text-dark">Parent Information</h5>

              <div class="mb-3" v-for="field in parentFields" :key="field.key">
                <label class="form-label fw-medium text-dark">{{ field.label }}</label>
                <input
                  :type="field.type"
                  class="form-control"
                  :placeholder="field.placeholder"
                  v-model="form.parent[field.key]"
                />
                <span class="text-danger" v-if="errorList[`parent.${field.key}`]">
                  <!-- {{ errorList[`parent.${field.key}`]}} -->
                  {{
                    errorList[`parent.${field.key}`][0]
                      .replace("parent.", "")
                      .replace("player.", "")
                  }}
                </span>
              </div>

              <!-- Password -->
              <div class="mb-3 position-relative">
                <label class="form-label fw-medium text-dark">Password</label>
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="form.parent.password"
                  class="form-control"
                  placeholder="Enter password"
                />
                <span class="eye-icon" @click="togglePassword">
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </span>

                <span class="text-danger" v-if="errorList['parent.password']">
                  {{
                    errorList["parent.password"][0]
                      .replace("parent.", "")
                      .replace("player.", "")
                  }}
                </span>
              </div>

              <!-- Confirm Password -->
              <div class="mb-3 position-relative">
                <label class="form-label fw-medium text-dark">Confirm Password</label>
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="form.parent.password_confirmation"
                  class="form-control"
                  placeholder="Confirm password"
                />
                <span class="eye-icon" @click="toggleConfirmPassword">
                  <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </span>
                <span class="text-danger" v-if="errorList['password_mismatch']">
                  {{ errorList["password_mismatch"] }}
                </span>
              </div>
            </div>

            <!-- Section Joueur -->
            <div v-if="formSection === 'player'">
              <h5 class="mb-3 text-dark">Player Information</h5>

              <div class="mb-3" v-for="field in playerFields" :key="field.key">
                <label class="form-label fw-medium text-dark">{{ field.label }}</label>
                <input
                  :type="field.type"
                  class="form-control"
                  :placeholder="field.placeholder"
                  v-model="form.player[field.key]"
                />
                <span class="text-danger" v-if="errorList[`player.${field.key}`]">
                  <!-- {{ errorList[`player.${field.key}`] }} -->
                  {{
                    errorList[`player.${field.key}`][0]
                      .replace("parent.", "")
                      .replace("player.", "")
                  }}
                </span>
              </div>

              <!-- Gender -->
              <div class="mb-3">
                <label class="form-label fw-medium text-dark">Gender*</label>
                <div class="d-flex gap-4">
                  <div class="form-check" v-for="g in genders" :key="g.value">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="'gender_' + g.value"
                      :value="g.value"
                      v-model="form.player.gender"
                      name="gender"
                    />
                    <label
                      class="form-check-label text-dark"
                      :for="'gender_' + g.value"
                      >{{ g.label }}</label
                    >
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="mb-3">
                <label class="form-label fw-medium text-dark">Preferred Location*</label>
                <div class="d-flex gap-4">
                  <div class="form-check" v-for="loc in locations" :key="loc">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="'location_' + loc"
                      :value="loc.toLowerCase()"
                      v-model="form.player.preferred_location"
                      name="preferred_location"
                    />
                    <label class="form-check-label text-dark" :for="'location_' + loc">{{
                      loc
                    }}</label>
                  </div>
                </div>
              </div>

              <!-- Jersey -->
              <div class="mb-3">
                <label class="form-label fw-medium text-dark">Jersey Size*</label>
                <div class="d-flex gap-4">
                  <div class="form-check" v-for="size in jerseySizes" :key="size">
                    <input
                      class="form-check-input"
                      type="radio"
                      :id="'jersey_' + size"
                      :value="size"
                      v-model="form.player.jersey_size"
                      name="jersey_size"
                    />
                    <label class="form-check-label text-dark" :for="'jersey_' + size">{{
                      size
                    }}</label>
                  </div>
                </div>
              </div>
            </div>

            <button class="custom-submit" type="submit" :disabled="showIsLoading">
              <span v-if="showIsLoading">
                <span class="spinner"></span>
                Registering...
              </span>
              <span v-else>Register</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Image -->
      <div class="image-container">
        <img src="/images/kids3.png" alt="Register Banner" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

definePageMeta({
  middleware: ["$guest"],
});

const parentFields = [
  {
    label: "Parent First Name",
    key: "first_name",
    placeholder: "Enter First Name",
    type: "text",
  },
  {
    label: "Parent Last Name",
    key: "last_name",
    placeholder: "Enter Last Name",
    type: "text",
  },
  { label: "Email", key: "email", placeholder: "Enter Email", type: "email" },
  { label: "Phone", key: "phone", placeholder: "Enter Phone", type: "text" },
  {
    label: "Address",
    key: "address",
    placeholder: "Enter Address",
    type: "text",
  },
];

const playerFields = [
  {
    label: "First Name",
    key: "first_name",
    placeholder: "Enter Player First Name",
    type: "text",
  },
  {
    label: "Last Name",
    key: "last_name",
    placeholder: "Enter Player Last Name",
    type: "text",
  },
  { label: "Birth Date", key: "birth_date", placeholder: "", type: "date" },
];

const locations = ["Courtice", "Bowmanville", "Newcastle"];
const jerseySizes = ["YS", "YM", "YL"];
const genders = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Other", value: "other" },
];

const showIsLoading = ref(false);

const formSection = ref("parent");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const errorList = ref({});
const globalError = ref("");

const togglePassword = () => (showPassword.value = !showPassword.value);
const toggleConfirmPassword = () =>
  (showConfirmPassword.value = !showConfirmPassword.value);

const form = ref({
  parent: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: "",
  },
  player: {
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    preferred_location: "",
    jersey_size: "",
  },
});

// const { refreshUser } = useSanctum();

async function registerUser() {
  errorList.value = {};
  globalError.value = "";
  showIsLoading.value = true;
  const user = ref();

  if (form.value.parent.password !== form.value.parent.password_confirmation) {
    errorList.value["password_mismatch"] = "Passwords do not match.";
    return;
  }

  const csrfToken = decodeURIComponent(
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1] || ""
  );

  try {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    });

    const csrfToken = decodeURIComponent(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1] || ""
    );

    const response = await axios.post(
      "http://localhost:8000/register",
      {
        parent: form.value.parent,
        player: form.value.player,
      },
      {
        withCredentials: true,
        headers: {
          "X-XSRF-TOKEN": csrfToken,
        },
      }
    );

    alert(response.data.message);

    Object.keys(form.value.parent).forEach((key) => (form.value.parent[key] = ""));
    Object.keys(form.value.player).forEach((key) => (form.value.player[key] = ""));
  } catch (error) {
    if (error.response?.status === 422) {
      errorList.value = error.response.data.errors;
      console.log("Erreurs de validation :", errorList.value);
    } else {
      globalError.value = "Erreur inattendue : " + error.message;
    }
  }

  try {
    const userResponse = await axios.get("http://localhost:8000/api/user", {
      withCredentials: true,
      headers: {
        "X-XSRF-TOKEN": csrfToken,
      },
    });
    // if (userResponse.data.role === "admin") {
    //   navigateTo("/");
    // } else {
    navigateTo("/user-dashboard");
    // }
  } catch (err) {
    console.error("Failed to fetch user after registration:", err);
  } finally {
    showIsLoading.value = false;
  }

  // navigateTo("/user-dashboard");
}
</script>

<style scoped>
.custom-submit {
  background-color: #d2910a;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  transition: background-color 0.3s;
}

.custom-submit:hover {
  background-color: #b87e07;
}

.register-wrapper {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.register-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  width: 100%;
  gap: 30px;
  align-items: stretch;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.form-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.form-control {
  position: relative;
  padding-right: 2.5rem;
}

.eye-icon {
  position: absolute;
  top: 38px;
  right: 15px;
  cursor: pointer;
  color: #666;
  font-size: 1rem;
}

.form-header {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-logo {
  width: 80px;
  margin-bottom: 10px;
}

.form-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: #222;
}

.form-subtitle {
  color: #777;
  font-size: 0.9rem;
  margin: 0;
}

.form-control:focus {
  border-color: #d2910a;
  box-shadow: 0 0 0 0.2rem rgba(210, 145, 10, 0.25);
  outline: none;
}

.form-check-input:focus {
  border-color: #d2910a;
  box-shadow: 0 0 0 0.2rem rgba(210, 145, 10, 0.25);
  outline: none;
}

.form-check-input:checked {
  background-color: #d2910a;
  border-color: #d2910a;
}

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
</style>
