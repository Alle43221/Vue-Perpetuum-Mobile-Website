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
  flex-wrap: wrap;
  width: 125%;
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
</style>