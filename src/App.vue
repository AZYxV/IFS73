<template>
  <NavComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavComponent: NavComponent,
    FooterComponent: FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

main{
  background: rgb(255,241,235);
  background: linear-gradient(0deg, rgba(255,241,235,1) 20%, rgba(255,255,255,1) 100%);
}
</style>
