<template>
    <div id="announcement">
    <nav>
      <router-link to="/sponsori/2021-2022">2021-2022</router-link>
      <p></p>
      <router-link to="/sponsori/2020-2021">2020-2021</router-link>
      <p></p>
      <router-link to="/sponsori/2019-2020">2019-2020</router-link>
      <p></p>
      <router-link to="/sponsori/2019-2020">2018-2019</router-link>
      <p></p>
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
  margin:10px 10px 10px 10px;
  width: available;
}

#announcement{
  width: 60vw;
  background: rgba(100, 164, 70, 0.75);
  border-radius: 10px;
  border: 10px solid rgba(26, 105, 66, 0.9);
  font-family: 'Trispace', sans-serif;
  display:flex;
  font-weight: bold;
  flex-direction: column;
  position: relative;
  margin:0 auto;
  color:#212121;
  justify-content: center;
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
  margin:20px 10px;
  text-decoration: none;
  color:RGB(169, 204, 141);
  width: available;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
  alignment: center;
  justify-content: space-around;
}
a{
  text-wrap: none;
  text-decoration: none;
  color:#212121;
  margin:10px 5px;
}
a:hover{

  text-decoration: underline;
}
p{
  margin:10px 5px;
  border-right:solid 4px RGB(169, 204, 141) ;
}

nav a.router-link-exact-active {
  color: RGB(169, 204, 141);
  text-decoration: underline;
}

@media only screen and (max-width: 945px) {
  #announcement{ min-width: 90vw;}
}

</style>