<template>
  <v-form @submit.prevent="createAccount">
    <v-text-field v-model="userRegistration.userName" label="Username" required></v-text-field>
    <v-text-field v-model="userRegistration.password" label="Password" type="password"
      :rules="passwordRules"></v-text-field>
    <v-text-field v-model="userRegistration.confirmPassword" label="Confirm Password" type="password"
      :rules="confirmPasswordRules"></v-text-field>
    <v-text-field v-model="userRegistration.emailId" label="Email" :rules="emailRules"></v-text-field>
    <v-radio-group v-model="userRegistration.gender" row :rules="genderRules">
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
    </v-radio-group>
    <v-btn type="submit" color="primary" block :disabled="!isValid">Create Account</v-btn>
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { Register } from "../../interface/general";
import { createWarAccount } from "../../services/registerService";

export default defineComponent({
  name: "OpenAccount",
  setup(props, {emit}) {
    const userRegistration: Register = reactive({
      userName: "",
      password: "",
      confirmPassword: "",
      gender: "",
      emailId: "",
    });

    const createAccount = async () => {
      try {
        const response = await createWarAccount(userRegistration);
        if(response){
          emit("accountStatus",response);
        }
      } catch (err) {
        console.log("Something went wrong");
         //emit("accountStatus",response);
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

    const genderRules = [(value: string) => !!value || "Gender is required"];

    const isValid = computed(() => {
      return (
        !!userRegistration.userName &&
        !!userRegistration.password &&
        !!userRegistration.confirmPassword &&
        !!userRegistration.emailId &&
        !!userRegistration.gender &&
        passwordRules.every((rule) => rule(userRegistration.password) === true) &&
        confirmPasswordRules.every((rule) => rule(userRegistration.confirmPassword as string) === true) &&
        emailRules.every((rule) => rule(userRegistration.emailId) === true) &&
        genderRules.every((rule) => rule(userRegistration.gender) === true)
      );
    });

    return {
      userRegistration,
      createAccount,
      passwordRules,
      confirmPasswordRules,
      emailRules,
      genderRules,
      isValid
    };
  },
});
</script>
