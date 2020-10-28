<template>
  <section class="guest">
      <h2>{{ guest.name }}</h2>
      <p>{{ guest.email }}</p>

      <button>checkin</button>
      <button v-on:click="deleteGuest">Delete Booking</button>
  </section>
</template>

<script>
import {eventBus} from '@/main.js'
import GuestService from '@/services/GuestService.js'


export default {
    name: 'guest',
    props: ['guest'],

    methods: {
        deleteGuest() {
            GuestService.deleteGuest(this.guest._id).then(() =>
                eventBus.$emit("guest-deleted", this.guest._id)
            );
        }
    }
}
</script>

<style lang='css' scoped>

</style>