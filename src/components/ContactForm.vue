<template>
    <form>
      <label class="label">Nume complet
        <input type="text" class="to-be-completed" placeholder="Popdan Gheorghe" pattern="Popdan Gheorghe">
      </label>

      <label class="label">Email
        <input type="email" class="to-be-completed" placeholder="popdan_gheorghe@gmail.com">
      </label>

      <label class="label">Titlu
        <input type="text" class="to-be-completed" placeholder="Titlul mesajului" size="500" >
      </label>

      <label class="label">Mesaj
        <textarea class="to-be-completed message" placeholder="Bună ziua! Vă contactez în legătură cu..."></textarea>
      </label>
      <div class="two-buttons">
        <button class="capcha">Capcha</button>

        <button class="submit">Trimite</button>
      </div>
    </form>
</template>

<style scoped>

.submit:hover{
  border-color: RGB(26, 105, 66);
  background-color: RGB(169, 204, 141);
  color:RGB(26, 105, 66);

  -webkit-transition: border-color, color, background-position 200ms ease;
  -moz-transition: border-color, color, background-position 200ms ease;
  -o-transition: border-color, color, background-position 200ms ease;
}

.submit:disabled{
  opacity: 75%;
  pointer-events: none;
}

input:focus, textarea:focus{
  outline: none !important;
  box-shadow: -2px 2px 0 rgb(26, 105, 66),
  2px 2px 0 rgb(26, 105, 66),
  2px -2px 0 rgb(26, 105, 66),
  -2px -2px 0 rgb(26, 105, 66);
}

.submit{
  border-radius: 15px;
  background-color: rgb(26, 105, 66);
  color:RGB(169, 204, 141);
  font-family: inherit;
  font-weight: inherit;
  font-size:1.5em;
  height: fit-content;
  border: 2px solid RGB(169, 204, 141);;
  padding: 0.6rem;
  margin: auto;
  cursor: pointer;
}
form{
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding:2rem;
}

.to-be-completed{
  background: RGB(169, 204, 141);
  border: 2px solid rgb(33, 33, 33);
  border-radius: 5px;

  padding: 12px 15px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  color:rgb(33, 33, 33);
  font-family: 'Trispace', sans-serif;
  font-size: 0.9em;
  overflow-x: hidden;
}

.to-be-completed:invalid{
  box-shadow: -2px 2px 0 #9c2210,
  2px 2px 0 #d9442d,
  2px -2px 0 #d9442d,
  -2px -2px 0 #d9442d;
}

.invalid{
  text-shadow: -1px 1px 1px #9c2210,
  1px 1px 1px #d9442d,
  1px -1px 1px #d9442d,
  -1px -1px 1px #d9442d;

}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(26, 105, 66, 0.9);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(26, 105, 66, 0.9);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgba(26, 105, 66, 0.9);
}

.label{
  font-weight: bold;
  color: #222222;
  display: flex;
  margin:0;
  padding: 0;
  flex-direction: column;
  width: 100%;
}

.message {
  height: 9rem;
  word-wrap: normal;
  resize: none;
}

input:focus, textarea:focus{
  outline: none !important;
  box-shadow: -2px 2px 0 rgb(26, 105, 66),
  2px 2px 0 rgb(26, 105, 66),
  2px -2px 0 rgb(26, 105, 66),
  -2px -2px 0 rgb(26, 105, 66);
}

.submit{
  border-radius: 15px;
  background-color: rgb(26, 105, 66);
  color:RGB(169, 204, 141);
  font-family: inherit;
  font-weight: inherit;
  font-size:1.5em;
  height: fit-content;
  border: 2px solid RGB(169, 204, 141);;
  padding: 0.6rem;
  margin: auto;
  cursor: pointer;
}

.capcha{
  height: 77px;
  width: 303px;
}

.two-buttons{
  display: flex;
  margin: 0;
}

.submit:hover{
  border-color: RGB(26, 105, 66);
  background-color: RGB(169, 204, 141);
  color:RGB(26, 105, 66);

  -webkit-transition: border-color, color, background-position 200ms ease;
  -moz-transition: border-color, color, background-position 200ms ease;
  -o-transition: border-color, color, background-position 200ms ease;
}

.submit:disabled{
  opacity: 75%;
  pointer-events: none;
}
select{
  color:rgba(26, 105, 66, 0.9)
}

option:checked:not([disabled]){
  font-weight: bold;
}

@media only screen and (max-width: 735px) {
  form{
    width: 85%;
  }
}

</style>