<template>
<main>
  <h1>Hotel Checkins</h1>
  <guest-form />
  <guest-grid :guests="guests" />
  <!-- <li v-for="guest in guests" :guest="guest"> {{guest.name}}</li> -->
  </main>
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
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
   
   main {
     background-color: #4605df;
     background-image: url('https://wallpaperaccess.com/full/2718925.jpg');
     margin: 0px;

    height: 100vh;
    width: 100vw;
    text-align: center;

    font-family:'Righteous', cursive; ;

   }

  h1 {
    font-size: 100pt;
    margin: 0px;
    text-shadow: 10px 10px 10px #e4e008;
  }


</style>