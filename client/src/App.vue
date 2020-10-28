<template>
<section>
  <guest-form />
  <guest-grid :guests="guests" />
  <!-- <li v-for="guest in guests" :guest="guest"> {{guest.name}}</li> -->
  </section>
</template>

<script>

import GuestService from './services/GuestService.js'
import Guest from './components/Guest.vue'
import GuestForm from './components/GuestForm.vue'
import GuestGrid from './components/GuestGrid.vue'

import {eventBus} from '@/main.js'

export default {
  name: 'app',
  components:{
    'guest-grid' : GuestGrid,
    'guest-form' : GuestForm
  },
  
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
      
      eventBus.$on("guest-added", (guest) => {
        GuestService.postGuest(guest).then(
          this.guests.push(guest)
        );
      });

      eventBus.$on("guest-deleted", (id) => {
        let index = this.guests.findIndex((guest) => guest._id === id);
        this.guests.splice(index, 1);
      });
    }
  }


}
</script>

<style>

</style>