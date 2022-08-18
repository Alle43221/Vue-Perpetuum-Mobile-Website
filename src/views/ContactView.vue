<template>
  <div id="contact">
  <div class="form-template">

    <div class="contact-info">
      <h1>Formular de contact</h1>

      <hr>

      <div class="form_text">
        <br>
        <p >Doriți să ne contactați?</p>
        <p>Aici ne puteți scrie un email.</p>
        <br>
        <br>

        <div class="email_section">
          <img alt="Icon for the email" class="location_icon" src="@/assets/location.png">
          <p class="email_text">Strada Mihai Eminescu 5, Satu Mare 440014, SM, România</p>
        </div>

        <div class="email_section">
          <img alt="Icon for the location" class="email_icon" src="@/assets/email.png">
          <a href="https://mail.google.com" class="email_copy" target="_blank">perpetuum.mobile@eminescusm.ro</a>
        </div>

        <br>
        <br>
        <p>Nu sunteți siguri de locație? </p>
        <a href="https://www.google.com/maps/place/Colegiul+Na%C8%9Bional+Mihai+Eminescu+Satu+Mare/@47.7893913,22.8741361,17z/data=!3m1!4b1!4m5!3m4!1s0x473805cdaac2883b:0x49b9e88a38ed23fe!8m2!3d47.7893834!4d22.8763575" target="_blank" class="maps-link">Ne găsiți pe Google Maps!</a>
      </div>
    </div>
  <ContactForm></ContactForm>
  </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
export default {
  components: {ContactForm}
}
</script>

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

.form_text{
  margin: auto;
  height: fit-content;
}

</style>