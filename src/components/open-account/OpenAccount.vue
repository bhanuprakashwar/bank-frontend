<template>
  <v-form @submit.prevent="createAccount">
    <v-text-field v-model="userRegistration.userName" label="Username" required></v-text-field>
    <v-text-field v-model="userRegistration.password" label="Password" type="password"
      :rules="passwordRules"></v-text-field>
    <v-text-field v-model="userRegistration.confirmPassword" label="Confirm Password" type="password"
      :rules="confirmPasswordRules"></v-text-field>
    <v-text-field v-model="userRegistration.emailId" label="Email" :rules="emailRules"></v-text-field>
    <v-date-picker v-model="userRegistration.dob" label="Date of Birth" :rules="dobRules"></v-date-picker>
    <v-radio-group v-model="userRegistration.gender" row :rules="genderRules">
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
    </v-radio-group>
    <v-btn type="submit" color="primary" block>Create Account</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { APIToken, Register } from "../../interface/general";
import { createWarAccount } from "../../services/registerService";

export default defineComponent({
  name: "OpenAccount",
  setup() {
    const userRegistration: Register = reactive({
      userName: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      emailId: "",
    });

    const createAccount = async () => {
      try {
        const apiToken: APIToken = await createWarAccount(userRegistration);
        const { token } = apiToken;
        console.log(token);
      } catch (err) {
        console.log("Something went wrong");
      }
    };

    const passwordRules = [
      (value: string) => !!value || "Password is required",
      (value: string) =>
        (value && value.length >= 8) || "Password must be at least 8 characters long",
    ];

    const confirmPasswordRules = [
      (value: string) => !!value || "Confirm Password is required",
      (value: string) => value === userRegistration.password || "Password does not match",
    ];

    const emailRules = [
      (value: string) => !!value || "Email is required",
      (value: string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email is invalid",
    ];

    const dobRules = [(value: string) => !!value || "Date of Birth is required"];

    const genderRules = [(value: string) => !!value || "Gender is required"];

    return {
      userRegistration,
      createAccount,
      passwordRules,
      confirmPasswordRules,
      emailRules,
      dobRules,
      genderRules,
    };
  },
});
</script>
