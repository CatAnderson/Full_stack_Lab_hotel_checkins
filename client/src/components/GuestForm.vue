<template lang='html'>
  <form id="guest-form" v-on:submit.prevent="addGuest">
      <h2>Create a new Guest Booking</h2>
      <div class="formWrap">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="name" required />
      </div>
      <div class="formWrap">
          <label for="email">Email: </label>
          <input type="text" id="email" v-model="email"  required />
      </div>

      <input type="submit" value="Save" id="save">
  </form>
</template>

<script>

import { eventBus } from "@/main.js";
import GuestService from "@/services/GuestService.js";

export default {
    name: "guest-form",
    data() {
        return {
            name: "",
            email: "",
            checkedIn: "No"
        };
    },
    methods: {
        addGuest() {
            const guest = {
                name: this.name,
                email: this.email,
                checkedIn: this.checkedIn
            }
            eventBus.$emit("guest-added", guest)
                this.name = "",
                this.email = "",
                this.checkedIn = this.checkedIn
        }
    }
}
</script>

<style lang='css' scoped>

h2 {
	margin: 10px 0;
	padding: 0;
}
form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}
label {
	min-width: 100px;
	display: inline-block;
}
.formWrap {
	margin-bottom: 10px;
}

</style>