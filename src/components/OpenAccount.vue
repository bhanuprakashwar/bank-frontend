<template>
  <v-form @submit.prevent="createAccount">
    <v-text-field v-model="account.username" label="Username"></v-text-field>
    <v-text-field v-model="account.password" label="Password" type="password"></v-text-field>
    <v-text-field v-model="account.confirmPassword" label="Confirm Password" type="password"></v-text-field>
    <v-date-picker v-model="account.dob" label="Date of Birth"></v-date-picker>
    <v-radio-group v-model="account.gender" row>
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
    </v-radio-group>
    <v-btn type="submit" color="primary" block>Create Account</v-btn>
  </v-form>
</template>

<script lang = "ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name:"OpenAccount",
  setup(){
    const account: any = reactive({
      userName: "",
      passWord: "",
      confirmPassword:"",
      dob:"",
      gender:""
    });
    const createAccount = () => {

    }
    return {
      account,
      createAccount
    }
  }
})
</script>
