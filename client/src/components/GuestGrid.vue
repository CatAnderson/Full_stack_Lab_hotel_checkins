<template lang='html'>
  <section id='guestGrid'>
      <guest v-for="(guest, index) in guests" :key='index' :guest="guest" />
  </section>
</template>

<script>
import Guest from './Guest.vue'
import GuestService from '@/services/GuestService.js'

export default {
    name: 'guest-grid',
    components:{
        guest: Guest
    },
    props: ['guests']
}
</script>

<style lang='css' scoped>
#guestsGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

</style>