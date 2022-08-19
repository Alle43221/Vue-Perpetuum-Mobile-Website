<template>
  <div id="list">
  <h2>Sponsori de platină</h2>
    <div class="logos">
      <div class="container">
        <img style='width:90%' src="@/assets/Sponsori 2021-2022/zollner.png">
      </div>
    </div>
    <h2>Sponsori de aur</h2>
    <div class="logos">
      <div class="container">
        <img style='width:90%' src="@/assets/Sponsori 2021-2022/agrotex.png">
      </div>
      <div class="container">
        <img style='width:90%' src="@/assets/Sponsori 2021-2022/received_429824612236297.jpeg">
      </div>
      <div class="container">
        <img style='width:90%' src="@/assets/Sponsori 2021-2022/received_2184306901723430.jpeg">
      </div>
      <div class="container">
        <img style='width:90%' src="@/assets/Sponsori 2021-2022/esedra.png">
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
  width: 20%;
  display: flex;
  flex-direction:row;
  margin:0 auto 0 0;
  justify-content: center;
}

#list{
  margin:15px;
}

.logos{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content:space-around;
}

</style>