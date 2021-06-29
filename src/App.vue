<template>

  <Header />
  
  <router-view></router-view>

</template>

<script>

  import Header from "./components/Header";

  export default {
    components: { Header }
  }

</script>

<style>

  * {
      /* border: solid 1px rgb(34, 34, 34); */
      font-family: 'Tw Cen MT', '微軟正黑體';
      margin: 0 !important;
      color: rgb(34, 34, 34);
    }
      
</style>
