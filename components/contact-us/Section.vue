<template>
  <section class="contact-section">
    <!-- Hero banner -->
    <div class="contact-hero">
      <h2>Contact</h2>
    </div>

    <!-- Intro -->
    <div class="contact-intro">
      <p class="subtitle">CONTACT US</p>
      <h3>N'hésitez pas à nous contacter si vous avez des questions</h3>
      <div class="decor-line"></div>
    </div>

    <!-- Contact Info Boxes -->
    <div class="contact-boxes">
      <div class="box">
        <div class="icon-container">
          <img src="/images/call.png" alt="Phone Icon" />
        </div>
        <div class="box-text">
          <p class="label">Call to ask a question</p>
          <span class="info">(00228) 70457409 / 99053279</span>
        </div>
      </div>

      <div class="box">
        <div class="icon-container">
          <img src="/images/email.png" alt="Email Icon" />
        </div>
        <div class="box-text">
          <p class="label">Email for a quote</p>
          <span class="info">contact@edaafrique.com</span>
        </div>
      </div>

      <div class="box">
        <div class="icon-container">
          <img src="/images/location.png" alt="Map Icon" />
        </div>
        <div class="box-text">
          <p class="label">Visit our premises</p>
          <span class="info">Canada</span>
        </div>
      </div>
    </div>

    <!-- Form and Map -->
    <div class="contact-content">
      <form class="contact-form">
        <div class="form-row">
          <input type="text" placeholder="Votre Nom" />
          <input type="text" placeholder="Votre prénom" />
        </div>
        <input type="email" placeholder="Votre adresse mail" />
        <input type="text" placeholder="Objet" />
        <textarea rows="5" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>

      <div class="map">
        <img src="/images/map.png" alt="Google Map" />
      </div>
    </div>

    <!-- Opening Hours -->
    <div class="opening-hours">
      <div class="icon-box">
        <i class="fa fa-calendar icon"></i>
      </div>
      <!-- <p> -->
      <div class="text-block">
        <strong>Opening hours</strong>
        <p class="info">
          Monday - Friday: 7:30 a.m. - 6:00 p.m. Saturday: 7:30 a.m. - 12:30
          p.m. Sunday: Closed
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun JS requis ici
</script>

<style scoped>
.contact-section {
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0 auto;
  max-width: 1200px;
  margin-bottom: 150px;
}

/* Hero */
.contact-hero {
  height: 250px;
  background: url("/images/kids1.png") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-hero h2 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}

/* Intro */
.contact-intro {
  text-align: center;
  padding: 2rem 1rem;
}

.contact-intro .subtitle {
  color: #d2910a;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.contact-intro h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0a1931;
  margin-bottom: 10px;
}

.decor-line {
  width: 40px;
  height: 4px;
  background: #d2910a;
  margin: 0.5rem auto;
  border-radius: 2px;
}

/* Boxes */
.contact-boxes {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 2rem 1rem;
  text-align: left;
  flex-wrap: wrap;
}

.box {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 250px;
}
.icon-box {
  width: 60px;
  height: 60px;
  background-color: #d2910a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container img {
  width: 100px; /* au lieu de 28px */
  height: 100px; /* au lieu de 28px */
  object-fit: contain;
}

.icon-container {
  width: 80px;
  height: 80px;
  background-color: #d2910a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-shrink: 0;
}

.icon-container img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.box-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.label {
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 14px;
  color: #222;
}

.info {
  color: #d2910a;
  font-size: 14px;
  font-weight: 500;
}

/* Form & Map */
.contact-content {
  display: flex;
  gap: 30px;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  align-items: stretch; /* force les enfants à la même hauteur */
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-row {
  display: flex;
  gap: 15px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
}

button {
  background-color: #d2910a;
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  align-self: flex-start;
}

.map {
  flex: 1;
  min-width: 300px;
}

.map img {
  width: 100%;
  height: 100%; /* occupe toute la hauteur */
  object-fit: cover;
  border-radius: 8px;
}

/* Opening hours */
.opening-hours {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 2rem 1rem;
  gap: 15px;
  font-size: 0.9rem;
  align-items: flex-start; /* Aligne l’icône avec le haut du texte */
  font-size: 14px;
  line-height: 1.6;
}

.opening-hours strong {
  display: block;
  margin-bottom: 4px;
  color: #0a1931; /* ou autre couleur titre */
  margin-bottom: 6px;
}

.opening-hours .icon {
  font-size: 30px; /* plus grand qu'avant */
  color: white; /* contraste avec le fond jaune */
}

.opening-hours .info {
  color: #d2910a;
}

.text-block {
  display: flex;
  flex-direction: column;
}

textarea {
  resize: none;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-family: inherit;
}
</style>
