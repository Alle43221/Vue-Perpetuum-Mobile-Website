<template>
  <div class="formsucces">
    <h2 class="success-message">HMMM... Ceva a mers prost și formularul nu a putut fi trimis...</h2>
    <img src="@/assets/location4.png">
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
  flex-wrap: wrap;
  max-width: 75vh ;
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
</style>>