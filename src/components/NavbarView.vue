<template>
  <div id="navbar">
    <div style=" -webkit-filter: drop-shadow(0px 0px 8px #222); filter: drop-shadow(0px 0px 8px #222);">
      <img class="logo" src="@/assets/logo_1-removebg-preview.png" alt="Perpetuum Mobile Logo">
    </div>
    <nav>
      <router-link class="navigation--link" to="/">Acasă</router-link>
      <router-link class="navigation--link" to="/echipa-noastra">Echipa noastră</router-link>
      <router-link class="navigation--link" to="/sponsori">Sponsori</router-link>
      <router-link class="navigation--link" to="/alatura-te-echipei">Alătură-te echipei!</router-link>
      <router-link class="navigation--link" to="/contact">Contact</router-link>
    </nav>
    <img class="ham" src="@/assets/Hamburger_icon.svg.png">
  </div>
</template>

<script>
export default {
  name: "NavbarView"
}
</script>

<style scoped>
.ham{
  z-index: 1;
  width: 30px;
  align-self: center;
  position: absolute;
  right: 20px;
  visibility: hidden;
  cursor: pointer;
}

#navbar{
  display:flex;
  flex-direction:row;
  background: rgb(100, 164, 70);
  font-size: 1.5em;
  margin:0;
  color:rgb(33, 33, 33);
  border-bottom: solid 0.6vh rgb(26, 105, 66);
  justify-content: space-between;
  font-family: 'Trispace', sans-serif;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  height: 8.8vh;
}

nav {
  display: flex;
  justify-content: flex-end;
  flex-direction:row;
  align-items: center;
}

.navigation--link{
  font-weight: bold;
  margin: 10px 30px 10px 10px;
  cursor: pointer;
  color:rgb(33, 33, 33);
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
}

.navigation--link:active{
  text-decoration: underline;
}

.navigation--link:hover{
  -webkit-transition: text-shadow, color 200ms ease;
  -moz-transition: text-shadow, color 200ms ease;
  -o-transition: text-shadow, color 200ms ease;

  color: RGB(169, 204, 141);
  text-shadow: -1.5px 1.5px 0 rgb(26, 105, 66),
  1.5px 1.5px 0 rgb(26, 105, 66),
  1.5px -1.5px 0 rgb(26, 105, 66),
  -1.5px -1.5px 0 rgb(26, 105, 66);
}

.logo{
  height: 8vh;
  width: auto;
  margin-left: 60px;
  cursor: pointer;
  -webkit-filter: drop-shadow(0px 0px 8px #222);
  filter: drop-shadow(0px 0px 8px #222);
}

nav a.router-link-exact-active {
  color: RGB(169, 204, 141);
  text-decoration: underline;
  text-shadow: -1.5px 1.5px 0 rgb(26, 105, 66),
  1.5px 1.5px 0 rgb(26, 105, 66),
  1.5px -1.5px 0 rgb(26, 105, 66),
  -1.5px -1.5px 0 rgb(26, 105, 66);
}

@media only screen and (max-width: 1230px) {
  .navigation--link{margin:10px 20px}
  nav{width: 80vw}
  .logo{ margin-left:4.5vw}
}

@media only screen and (max-width: 975px) {
  .navigation--link{font-size: 2.5vw; margin:10px}
}

@media only screen and (max-width: 730px) {
  nav{visibility: hidden}
  .ham{visibility: visible}
}
</style>