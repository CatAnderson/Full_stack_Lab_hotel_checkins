<template>
  <section class="guest">
      <h2>{{ guest.name }}</h2>
      <p>{{ guest.email }}</p>

      <button>checkin</button>
      <button>delete</button>
  </section>
</template>

<script>
import {eventBus} from '@/main.js'
import GuestService from '@/services/GuestService.js'


export default {
    name: 'guest',
    props: ['guest']
}
</script>

<style lang='css' scoped>

</style>