<template>
  <div id="list">
  <h2>Sponsori de platină</h2>
    <div class="logos">
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/zollner.png">
      </div>
    </div>
    <h2>Sponsori de aur</h2>
    <div class="logos">
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/agrotex-removebg-preview.png">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/received_429824612236297.jpeg">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/received_2184306901723430.jpeg">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/76139603_nicovid_s.r.l._logo.jpg">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/esedra.png">
      </div>
    </div>
    <h2>Sponsori de argint</h2>
    <div class="logos">
      <div class="container">
        <img style='width:90%' src="@/assets/Sponsori 2021-2022/logo-lexconta.png">
      </div>
    </div>
    <h2>Sponsori de bronz</h2>
    <div class="logos">
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/Hotel-Aurora-logo.png">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/business_logo.png">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/12662559_1129106640435772_1430275912964632027_n.jpg">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "SponsorsList2022"
}
</script>

<style scoped>
.container{
  border-radius: 5px;
  background: RGB(169, 204, 141);
  height: 100px;
  display: flex;
  flex-direction:row;
  margin:0 auto 0 0;
  justify-content: center;
  align-items: center;
  align-self: center;
}

#list{
  margin:15px;
}

.logos{
  display: inline-grid;
  margin:0 auto;
  gap:1rem;
  grid-template-columns: auto;
}

img{
  display: block;
  height: 90%;
  width: auto;
}

@media only screen and (max-width: 1481px) {
  .logos { grid-template-columns: repeat(4, 1fr); }
}

@media only screen and (max-width: 1800px) {
  .logos { grid-template-columns: repeat(5, 1fr); }
}

</style>