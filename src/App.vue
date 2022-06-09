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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
}
</style>
