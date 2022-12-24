<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: theSans;
}

/* width */
::-webkit-scrollbar {
    width: 7px;
    
}

/* Track */
::-webkit-scrollbar-track {
  //  box-shadow: inset 0 0 5px gray; 
    /* border-radius: 10px; */
}

/* Handle */
::-webkit-scrollbar-thumb {
    
    // box-shadow: inset 0 0 5px #009688; 
    background: var(--mainColor); 
    /* border-radius: 10px; */
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--altColor); 
  }
</style>
