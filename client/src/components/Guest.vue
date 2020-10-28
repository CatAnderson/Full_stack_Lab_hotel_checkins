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

.guest {
  width: 30%;
  background: #9c0082;
  mix-blend-mode: multiply;
  margin: 30px;
  padding: 25px;
  box-shadow: 10px 10px 5px #e4e008;
  color: #ffffff;
}

</style>