<template>
  <div class="root">
    <span v-if="state.error" class="error" id="submit-error">
      {{ state.error }}
    </span>

    <p>
      <input type="text" placeholder="Email" v-model="state.email" />
      <span v-if="v$.email.$error" class="error">
        {{ v$.email.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="state.password" />
      <span v-if="v$.password.$error" class="error">
        {{ v$.password.$errors[0].$message }}
      </span>
    </p>

    <button @click="submitForm">Login</button>
  </div>
</template>

<style lang="css" scoped>
.root {
  min-width: 400px;
  margin: 0 auto;
  color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
@media only screen and (min-width: 800px) {
  .root {
    max-width: 300px;
  }
}

button {
  margin-top: 10px;
  border: none;
}
</style>

<script lang="ts">
import { reactive } from "vue";
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useAuthStore } from "@/stores/auth";
import userHelper from "@/helpers/user";
import router from "@/router";
export default {
  setup() {
    const authStore = useAuthStore();

    const state = reactive({
      email: "",
      password: "",
      error: null,
    });
    const rules = {
      email: { required, email }, // Matches state.contact.email
      password: { required, minLength: minLength(6) }, // Matches state.contact.email
    };

    const v$ = useVuelidate(rules, state);
    function submitForm() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        const response = userHelper.login(state.email, state.password);
        if (response.success) {
          console.log("response.data", response.data);
          authStore.setUser(response.data);
          router.push("/orders");
        } else {
          state.error = response.data;
        }
      } else {
        state.error = "Validation failed. Please input proper details";
      }
    }
    return { state, v$, submitForm };
  },
};
</script>
