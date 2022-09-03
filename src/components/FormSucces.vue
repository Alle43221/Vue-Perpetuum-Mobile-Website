<template>
  <div class="formsucces">
    <h2 class="success-message">YAY! Formularul a fost trimis cu succes de pe email-ul introdus!</h2>
    <img alt="Happy robot cheering" src="@/assets/Robots/location2.png">
  </div>
</template>

<style scoped>

.success-message{
  color:#212121;
  font-family: inherit;
  text-align: center;
}

.formsucces{
  margin:2rem;
  display: flex;
  flex-direction: column;
  width: 50%;
}

img{
  margin:0 auto;
  padding: 0;
  display: block;
  max-width:230px;
  max-height:75vh;
  width: auto;
  height: auto;
}
@media only screen and (max-width: 735px) {
  .formsucces{
    margin:2rem auto;
    width: 80vw;
  }
}

</style>>