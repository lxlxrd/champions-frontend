<template>
  <div style="text-align: center; margin-top: 50px">
    <h1 style="margin-bottom: 20px; font-family: sans-serif">📧 Verify Your Email</h1>

    <div
      style="
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        margin: 0 auto;
        font-family: sans-serif;
      "
    >
      <p style="font-size: 1.1rem; margin: 0">
        Your account has been created successfully. <br />
        To access your dashboard, please check your email and click the verification link
        we sent you. <br />
        <strong>
          You will only be able to sign in after verifying your email address.
        </strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

definePageMeta({
  layout: "after-register",
});

const route = useRoute();
const message = ref("");

onMounted(async () => {
  const token = route.query.token;
  const verified = route.query.verified;

  if (token && verified === "1") {
    localStorage.setItem("auth_token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const authStore = useAuthStore();
      const response = await axios.get("http://localhost:8000/api/user", {
        withCredentials: true,
      });
      authStore.setUser(response.data);
      message.value = "Your email has been verified successfully.";
    } catch (e) {
      message.value = "Email verified, but failed to load user.";
    }
  } else {
    message.value = "Invalid or missing verification parameters.";
  }
});
</script>

<style scoped>
.alert-success {
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: #d4edda;
  color: #155724;
}
.btn {
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
}
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-success {
  background-color: #28a745;
  color: white;
}
</style>
