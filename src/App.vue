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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Righteous&display=swap');
@import "@/scss/_variables.scss";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $gap-4;
  padding: 4rem 1rem;
}

h1, h2, h3{
  font-family: 'Righteous', cursive;
}
</style>
