<template>
  <div id="pagenotfound">
    <div class="announcement">
      <img src="../assets/location5.png">
      <div id="info">
      <h1>404 Page not found</h1>
      <h2>Ne pare rău, dar nu am putut găsi pagina pe care o căutai.</h2>
        <a href="/">Către pagina principală</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:10px 20px;
}

.announcement{
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
  color:#212121
}
img{
  margin: 10px 0 10px 20px;
  padding:0;
  height: 50vh;
}

a{
  border-radius: 15px;
  background-color: rgb(26, 105, 66);
  font-family: inherit;
  font-weight: inherit;
  font-size:1.5em;
  height: fit-content;
  border: 2px solid RGB(169, 204, 141);;
  padding: 0.6rem;
  cursor: pointer;
  margin:20px auto 10px auto;
  text-decoration: none;
  color:RGB(169, 204, 141);
  width: fit-content  ;
}

a:hover{
  border-color: RGB(26, 105, 66);
  background-color: RGB(169, 204, 141);
  color:RGB(26, 105, 66);
  -webkit-transition: border-color, color, background-position 200ms ease;
  -moz-transition: border-color, color, background-position 200ms ease;
  -o-transition: border-color, color, background-position 200ms ease;
}
</style>