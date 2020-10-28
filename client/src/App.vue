<template>
<ul>
  <li v-for="guest in guests" :guest="guest"> {{guest.name}}</li>
</ul>
</template>

<script>

import GuestService from './services/GuestService.js'

export default {
  name: 'app',
  
  data(){
    return{
      guests: []
  }
  },

  mounted(){
    this.fetchGuests();
  },

  methods: {
    fetchGuests(){
      GuestService.getGuests()
      .then((guests) => (this.guests = guests));
    }
  }


}
</script>

<style>

</style>