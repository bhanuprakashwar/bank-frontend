<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-sheet elevation="10" width="100%" height="100%" rounded="lg" class="pa-5">
          <h1 class="mb-5">Welcome to the WarBank</h1>
          <v-form @submit.prevent="login">
            <v-text-field prepend-inner-icon="mdi-account" v-model="userCredentials.userName"
              label="username"></v-text-field>
            <v-text-field prepend-inner-icon="mdi-lock" v-model="userCredentials.password" label="password"
              type="password"></v-text-field>
            <v-btn color="primary" block>
              Login
            </v-btn>
          </v-form>
          <div class="d-flex flex-column align-center mt-4">
            <span>{{ noAccountPlaceholder }}</span>
            <v-btn rounded="lg" variant="outlined" color="primary" @click="showAccountDialog = true">
              Create Account
            </v-btn>
          </div>
          <v-dialog v-model="showAccountDialog">
            <v-card>
              <v-card-title>
                Create Account
              </v-card-title>
              <v-card-text>
                <OpenAccount/>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Credentials } from "../interface/general";
import { fetchLoginService } from "../services/loginService";
import OpenAccount from "./open-account/OpenAccount.vue";

export default defineComponent({
  name: "Login",
  components: {
    OpenAccount,
  },
  setup() {
    const userCredentials: Credentials = reactive({
      userName: "",
      password: "",
    });
    const showAccountDialog = ref(false);
    const noAccountPlaceholder = "Dont have an account?";
    const login = async () => {
      await fetchLoginService(userCredentials.userName, userCredentials.password);
    };
    return {
      userCredentials,
      noAccountPlaceholder,
      login,
      showAccountDialog,
    };
  },
});
</script>
