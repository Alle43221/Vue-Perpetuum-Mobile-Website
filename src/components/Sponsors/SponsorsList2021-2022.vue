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
        <img src="@/assets/Sponsori 2021-2022/received_429824612236297.jpeg">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/received_2184306901723430.jpeg">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/esedra.png">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/agrotex-removebg-preview.png">
      </div>
      <div class="container">
        <img src="@/assets/Sponsori 2021-2022/76139603_nicovid_s.r.l._logo.jpg">
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
        <img src="@/assets/Sponsori 2021-2022/Hotel-Aurora-logo (1).png">
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

#list{
  margin:10px;
}

.logos{
  display: inline-flex;
  margin:0 auto;
  grid-template-rows: repeat(1, 15vh);
  flex-wrap: wrap;
}

img{
  display: block;
  height: 15vh;
  width: auto;
  border-radius: 5px;
  border:5px solid RGB(169, 204, 141);
  background: RGB(169, 204, 141);
  margin:5px
}

@media only screen and (max-width: 1481px) {
  .logos { grid-template-columns: repeat(4, 15vh); }
}

@media only screen and (max-width: 2000px) {
  .logos { grid-template-columns: repeat(4, 15vh); }
}

</style>