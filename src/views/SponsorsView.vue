<template>
    <div id="announcement">
    <nav>
      <router-link to="/sponsori/2021-2022">2021-2022</router-link>|
      <router-link to="/sponsori/2020-2021">2020-2021</router-link>|
      <router-link to="/sponsori/2019-2020">2019-2020</router-link>|
      <router-link to="/sponsori/2019-2020">2018-2019</router-link>|
      <router-link to="/sponsori/2019-2020">2017-2018</router-link>
    </nav>
      <div id="info">
      <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
#info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:10px 30px 10px 10px;
  width: 110vh;
}

#announcement{
  width: 60%;
  background: rgba(100, 164, 70, 0.75);
  border-radius: 10px;
  border: 10px solid rgba(26, 105, 66, 0.9);
  font-family: 'Trispace', sans-serif;
  display:flex;
  font-weight: bold;
  flex-direction: row;
  position: relative;
  margin:0 auto;
  color:#212121;
  justify-content:center;
}

nav{
  border-radius: 15px;
  background-color: rgb(26, 105, 66);
  font-family: inherit;
  font-weight: inherit;
  font-size:1.5em;
  height: fit-content;
  border: 2px solid RGB(169, 204, 141);;
  padding: 0.6rem;
  cursor: pointer;
  margin:20px auto;
  text-decoration: none;
  color:RGB(169, 204, 141);
  width: 170vh;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
}
a{
  text-wrap: none;
}

</style>