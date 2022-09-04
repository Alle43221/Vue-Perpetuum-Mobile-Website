<template>
    <form>
      <label class="label">Nume complet
        <input type="text" class="to-be-completed" placeholder="Popdan Gheorghe" pattern="Popdan Gheorghe">
      </label>

      <label class="label">Email
        <input type="email" class="to-be-completed" placeholder="popdan_gheorghe@gmail.com">
      </label>

      <label class="label">Număr de telefon
        <input type="tel" class="to-be-completed" placeholder="07n_am_cartela">
      </label>

      <label class="label">Școală
        <select class="to-be-completed dropdown">
          <option class="placeholder" value="" disabled selected hidden style="color:rgba(26, 105, 66, 0.9)">Școala la care înveți</option>
          <option value="cnme">CNME</option>
          <option value="cnis">CNIS</option>
          <option value="cfr">CFR</option>
        </select>
      </label>

      <label class="label">Username și ID Discord
        <input type="text" class="to-be-completed" placeholder="BigChungus#6969">
      </label>


      <div class="container">
        <div class="multiple_choice">

          <p class="item">Rol</p>
          <label class="option">
            <input type="radio" name="role">Membru
          </label>
          <label class="option">
            <input type="radio" name="role">Voluntar
          </label>

        </div>

        <div class="multiple_choice">
          <p class="item">Departament</p>
          <label class="option">
            <input type="radio" name="department">Programare
          </label>
          <label class="option">
            <input type="radio" name="department">Proiectare & Design
          </label>
          <label class="option">
            <input type="radio" name="department">Mecanică
          </label>
          <label class="option">
            <input type="radio" name="department">Public Relations
          </label>
        </div>

      </div>


      <label class="label">Hobby-uri
        <textarea placeholder="În timpul liber îmi place să..." class="message to-be-completed"></textarea>
      </label>

      <label class="label">Rezultate opținute
        <textarea placeholder="Ce lucruri despre tine ne-ar putea impresiona?" class="message to-be-completed"></textarea>
      </label>

      <label class="label">Mesaj opțional
        <textarea placeholder="Mai ai ceva ce ai dori să ne spui?" class="message to-be-completed"></textarea>
      </label>
      <div class="two-buttons">
        <button class="capcha">Capcha</button>

        <button class="submit">Trimite</button>
      </div>
    </form>
</template>

<style scoped>
.item{
  color:#212121;
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
  margin: 10px auto 0 auto;
  cursor: pointer;
}

.capcha{
  height: 78px;
  width: 304px;
}

.two-buttons{
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

.multiple_choice {
  display: flex;
  flex-direction: column;
}

.container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0;
}

.option{
  color: #212121;
  margin: 0.3rem 0;
  font-weight: normal;
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

@media only screen and (max-width: 400px) {
  .capcha{
    height: 144px;
    width: 164px;
  }
}
</style>