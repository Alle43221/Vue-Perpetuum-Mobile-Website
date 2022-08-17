<template>
  <NavbarView></NavbarView>
  <div id="content"></div>
  <FooterView></FooterView>
</template>

<script>
import NavbarView from './components/NavbarView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    FooterView,
    NavbarView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding: 0;
}

#content{
  min-height: 59.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8vh 0;
}
</style>
