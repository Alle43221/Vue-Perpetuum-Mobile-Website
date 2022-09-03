<template>
  <div class="formsucces">
    <h2 class="success-message">HMMM... Ceva a mers prost și formularul nu a putut fi trimis...</h2>
    <img src="@/assets/Robots/location4.png">
    <h2 class="success-message">Te rugăm să ne contactezi manual pe adresa de email.</h2>
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