<template lang='html'>
  <form id="guest-form" v-on:submit.prevent="addGuest">
      <h2>Create a new Guest Booking</h2>
      <div class="formWrap">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="name" />
      </div>
      <div class="formWrap">
          <label for="email">Email: </label>
          <input type="text" id="email" v-model="email" />
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
        }
    }
}
</script>

<style lang='css' scoped>

</style>