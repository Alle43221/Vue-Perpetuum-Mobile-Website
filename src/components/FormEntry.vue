<template>
  <div id="formsucces">
    <h2 class="success-message">HEY! Ai intrat pe această pagină din greșeală.</h2>
    <img src="@/assets/location6.png">
    <h2 class="success-message">Poate voiai să ajungi aici:</h2>
    <a v-bind:href='src' v-text="msg"></a>
  </div>
</template>

<script>
export default ({
  data(){
    return{
      msg:'',
      src:'/',
    };
  },
  methods: {
    showInnerHTML() {
      this.src='/';
      let src=window.location.href;
      if(src.includes('contact'))
      {
        this.msg='Contact';
        this.src+='contact';
      }
      else {
        this.msg = 'Alătură-te echipei!';
        this.src += 'alatura-te-echipei';
      }
    },
  },
  beforeMount() {
    this.showInnerHTML();
  }
});
</script>

<style scoped>
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

.success-message{
  color:#212121;
  font-family: inherit;
  text-align: center;
}

#formsucces {
  margin:2rem;
  display: flex;
  flex-direction: column;
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