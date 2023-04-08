<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-alert v-if="showSuccessAlert" color="success" icon="$success" title="Success" closable
          :text="apiAccountCreationStatus">
        </v-alert>
        <v-alert v-if="showWarningAlert" color="warning" icon="$warning" title="Warning" closable
          :text="apiAccountCreationStatus">
        </v-alert>
        <v-alert v-if="showErrorAlert" color="error" icon="$error" title="Error" closable
          :text="apiAccountCreationStatus">
        </v-alert>
        <v-progress-linear v-if="showSuccessAlert || showWarningAlert || showErrorAlert" color="deep-purple-accent-4"
          height="5" v-model="progressValue"></v-progress-linear>
        <v-sheet elevation="10" width="100%" height="100%" rounded="lg" class="pa-5">
          <h1 class="mb-5">Welcome to the WarBank</h1>
          <v-form @submit.prevent="login">
            <v-text-field prepend-inner-icon="mdi-account" v-model="userCredentials.userName"
              label="username"></v-text-field>
            <v-text-field prepend-inner-icon="mdi-lock" v-model="userCredentials.password" label="password"
              type="password"></v-text-field>
            <v-btn color="primary" block type="submit" :disabled="!isValid">
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
                <OpenAccount @accountStatus="getAccountStatus" />
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { Credentials } from "../interface/general";
import { fetchLoginService } from "../services/loginService";
import OpenAccount from "./open-account/OpenAccount.vue";

export default defineComponent({
  name: "Login",
  components: {
    OpenAccount,
  },
  setup() {
    const progressValue = ref(0)
    const userCredentials: Credentials = reactive({
      userName: "",
      password: "",
    });
    const showAccountDialog = ref(false);
    const showSuccessAlert = ref(false);
    const showWarningAlert = ref(false);
    const showErrorAlert = ref(false);
    const noAccountPlaceholder = "Dont have an account?";
    const apiAccountCreationStatus = ref("");
    const login = async () => {
      await fetchLoginService(userCredentials.userName, userCredentials.password);
    };
    const getAccountStatus = (status: any) => {
      showAccountDialog.value = false;
      if (status.account && status.balance) {
        showSuccessAlert.value = true;
      } else if (status.account) {
        showWarningAlert.value = true;
      } else {
        showErrorAlert.value = true;
      }
      progressValue.value = 0;
      apiAccountCreationStatus.value = status.message;
      setInterval(() => {
        if (progressValue.value < 100) {
          progressValue.value += 1.67;
        } else {
          showSuccessAlert.value = false;
          showErrorAlert.value = false;
          showWarningAlert.value = false;
        }
      }, 50);
    };
    const isValid = computed(() => {
      return (
        userCredentials.userName && userCredentials.password
      );
    });
    return {
      userCredentials,
      noAccountPlaceholder,
      login,
      showAccountDialog,
      getAccountStatus,
      showSuccessAlert,
      showWarningAlert,
      showErrorAlert,
      apiAccountCreationStatus,
      progressValue,
      isValid
    };
  },
});
</script>
