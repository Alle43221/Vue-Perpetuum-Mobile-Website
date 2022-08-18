<template>
  <div id="jointheteam">
  <div class="form-template">

    <div class="contact-info">
      <h1>Alătură-te echipei noastre de robotică!</h1>

      <hr>

      <div class="form_text">
        <p >Completează formularul alăturat pentru un posibil loc în echipă.</p>

        <div class="adress&location">
          <div class="email_section">
            <img alt="Icon for the email" class="location_icon" src="@/assets/location.png">
            <p class="email_text">Strada Mihai Eminescu 5, Satu Mare 440014, SM, România</p>
          </div>

          <div class="email_section">
            <img alt="Icon for the location" class="email_icon" src="@/assets/email.png">
            <a href="https://mail.google.com" class="email_copy" target="_blank">perpetuum.mobile@eminescusm.ro</a>
          </div>
        </div>

        <p>Nu sunteți siguri de locație? </p>
        <a href="https://www.google.com/maps/place/Colegiul+Na%C8%9Bional+Mihai+Eminescu+Satu+Mare/@47.7893913,22.8741361,17z/data=!3m1!4b1!4m5!3m4!1s0x473805cdaac2883b:0x49b9e88a38ed23fe!8m2!3d47.7893834!4d22.8763575" target="_blank" class="maps-link">Ne găsiți pe Google Maps!</a>
      </div>
    </div>

    <div class="form">
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

          <button class="submit" >Trimite</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<style scoped>
.form-template{
  width: 60%;
  margin: 0 auto;
  vertical-align: center;
  background: rgba(100, 164, 70, 0.75);
  border-radius: 10px;
  border: 10px solid rgba(26, 105, 66, 0.9);
  font-family: 'Trispace', sans-serif;
  display:flex;
  height: fit-content;
  font-weight: bold;
}

.contact-info{
  color:rgb(33, 33, 33);
  margin: 2rem;
  display: flex;
  flex-direction: column;
}

.form{
  margin:2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 125%;
}

.to-be-completed{
  background: RGB(169, 204, 141);
  border: 2px solid rgb(33, 33, 33);
  border-radius: 5px;

  width: 100%;
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

.maps-link{
  color: RGBA(169, 204, 141);
  text-decoration: none;
  margin: 0 0 0 5px;
}

.maps-link:hover{
  text-decoration: underline;
}

.email_copy:hover{
  text-decoration: underline;
}

.email_copy:visited{
  color: inherit;
  text-decoration: none;
}

.email_copy{
  text-decoration: none;
  margin: 5px 0;
}

.label{
  font-weight: bold;
  color: #222222;
}

.option{
  font-weight: normal;
}

.message {
  height: 9rem;
  word-wrap: normal;
  resize: none;
}

.email_icon{
  width: 6%;
  height: 6%;
  margin: 6px 8px 0 0;
  padding: 0;
  float:left;
}

.email_section{
  display: flex;
  margin: 0;
  padding: 0;
}

.location_icon{
  width: 5.5%;
  height: 5.5%;
  margin: 11px 8px 0 0;
  padding: 0;
  float:left;
}

p{
  margin: 5px ;
  color:#212121;
}

hr{
  height: 5px;
  border: 0;
  background-color: RGBA(169, 204, 141, 0.7);
  width: available;
  margin: 0 ;
  border-radius: 5px;
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

.form_text{
  margin: auto;
  height: fit-content;
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
}

a{
  color:#212121;
  text-decoration: none;
}

a:hover{
  text-decoration: underline;
}

select{
  color:rgba(26, 105, 66, 0.9)
}

option:checked:not([disabled]){
  font-weight: bold;
}
</style>