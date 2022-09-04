<template>
  <div id="navbar">
    <div style=" -webkit-filter: drop-shadow(0px 0px 8px #222); filter: drop-shadow(0px 0px 8px #222);">
      <img class="logo" src="@/assets/logo_1-removebg-preview.png" alt="Perpetuum Mobile Logo">
    </div>
    <nav id="nav">
      <router-link class="navigation--link" to="/">Acasă</router-link>
      <router-link class="navigation--link" to="/echipa-noastra">Echipa noastră</router-link>
      <router-link class="navigation--link" to="/sponsori">Sponsori</router-link>
      <router-link class="navigation--link" to="/alatura-te-echipei">Alătură-te echipei!</router-link>
      <router-link class="navigation--link" to="/contact">Contact</router-link>
    </nav>
    <img  v-on:click="handler" class="ham" src="@/assets/Hamburger_icon.svg.png">
    <div id="hamburger">
      <div id="blur"></div>
      <img src="@/assets/agrotex3.png">
      <nav id="nav_new">
      <router-link class="navigation--link" to="/">Acasă</router-link>
      <router-link class="navigation--link" to="/echipa-noastra">Echipa noastră</router-link>
      <router-link class="navigation--link" to="/sponsori">Sponsori</router-link>
      <router-link class="navigation--link" to="/alatura-te-echipei">Alătură-te echipei!</router-link>
      <router-link class="navigation--link" to="/contact">Contact</router-link>
      </nav>
      <p>X</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarView",
  methods: {
    handler() {
      let HAM=document.getElementById("hamburger");
      HAM.style.display="block";
    }
  }
}

</script>

<style scoped>

#blur{
  height: 100vh;
  width:100vw;
  z-index: 2;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  position: absolute;
}

#hamburger p{
  z-index: 5;
  position: absolute;
  right:0;
  top:0;
  margin:30px 35px 0 0;
  font-weight: bold;
  font-size: 2rem;
}

#nav_new{
  display: flex;
  flex-direction: column;
  z-index: 4;
  position: absolute;
  right:16%;
  top:13%;
  background: RGBA(175, 175, 175, 0.5);
  border-radius: 100%;
  box-shadow: 0 0 5px 10px RGBA(175, 175, 175, 0.5);
  width: 70%;
}


#nav_new a{
  margin:14px 10px 10px 10px;
}
#hamburger{
  z-index: 3;
  position: absolute;
  top:0;
  right: 0;
  /*display: none;*/
  display:block;
}
.ham{
  width: 30px;
  align-self: center;
  position: absolute;
  right: 20px;
  display:none;
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

#nav {
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

#nav a.router-link-exact-active {
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
  .ham{display: block}
}
</style>