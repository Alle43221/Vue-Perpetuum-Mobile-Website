<template>
  <div class="footer">
    <div class="social-links">
      <a href="https://github.com/Perpetuum-Mobile-RO065" target="_blank" class="social">
        <img class="icon git-icon" src="pictures/10.png" alt="Github social link"/>
      </a>
      <a href="https://www.instagram.com/perpetuummobileftc/" target="_blank" class="social">
        <img class="icon insta-icon" src="pictures/12.png" alt="Instagram social link"/>
      </a>
      <a href="https://discord.gg/8CPhWQCHhY" target="_blank" class="social">
        <img class="icon dis-icon" src="pictures/13.png" alt="Discord social link"/>
      </a>
      <a href="https://www.facebook.com/perpetuummobilefirsttech/" target="_blank" class="social">
        <img class="icon -icon" src="pictures/15-1.png" alt="social link"/>
      </a>
    </div>
    <p class="copyright">Copyright© 2022 Perpetuum Mobile. Toate drepturile rezervate. Made with 🖤 by Alex David and Alexandra Moroz.</p>
  </div>
</template>

<script>
export default {
  name: "FooterView.vue"
}
</script>

<style scoped>
.footer{
  background: rgb(100, 164, 70);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-weight: bold;
  color:rgb(33, 33, 33);
  font-family: 'Trispace', sans-serif;

  position:relative;
  bottom:0;
  height: 11.5vh;
  width: 100%;
  padding: 1.5vh 0 1.5vh 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: solid 0.6vh rgb(26, 105, 66);
}

.social-links{
  display: inline-block;
  width: 60rem;
  text-align: center;
}

.icon{
  cursor: pointer;
}

.icon:hover{
  -webkit-filter: drop-shadow(0px 0px 5px  RGB(169, 204, 141));
  filter: drop-shadow(0px 0px 5px RGB(169, 204, 141));
}

.insta-icon{
  width: 4%;
  margin:0;
  padding: 0;
}

.dis-icon{
  width: 5%;
  margin:0;
  padding: 0;
}

.git-icon{
  width: 4%;
  margin:0;
  padding: 0;
}

.-icon{
  width: 4%;
  margin:0;
  padding: 0;
}

.copyright{
  margin: 0;
  padding: 0;
}

.social{
  padding: 0;
  margin: 0 75px 0 75px;
  color:transparent;
}
</style>