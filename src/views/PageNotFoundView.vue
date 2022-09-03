<template>
    <div class="announcement">
      <img src="../assets/Robots/location5.png">
      <div id="info">
      <h1>404 Page not found</h1>
      <h2>Ne pare rău, dar nu am putut găsi pagina pe care o căutai.</h2>
        <a href="/">Către pagina principală</a>
      </div>
    </div>
</template>

<style scoped>
#info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:10px 30px 10px 10px;
  width: 30vw;
}


.announcement{
  width: 45%;
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
  align-items:center;
}
img{
  margin: 10px 0 10px 20px;
  padding:0;
  height: 53vh;
  width: auto;
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
  margin:20px auto 10px 0;
  text-decoration: none;
  color:RGB(169, 204, 141);
  width: fit-content  ;
  text-align: center;
}

a:hover{
  border-color: RGB(26, 105, 66);
  background-color: RGB(169, 204, 141);
  color:RGB(26, 105, 66);
  -webkit-transition: border-color, color, background-position 200ms ease;
  -moz-transition: border-color, color, background-position 200ms ease;
  -o-transition: border-color, color, background-position 200ms ease;
}

@media only screen and (max-width: 1090px) {
  .announcement{ min-width: 90vw; justify-content: center}
  #info{width: 50vw}
}

@media only screen and (max-width: 600px) {
  .announcement{flex-direction: column-reverse}
  #info{width: 75vw; margin:0 auto}
}
</style>