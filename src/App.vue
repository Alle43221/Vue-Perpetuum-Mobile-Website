<template>
  <div id="app">
    <NavbarView></NavbarView>
    <div id="content">
      <router-view></router-view>
    </div>
    <FooterView></FooterView>
  </div>
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
