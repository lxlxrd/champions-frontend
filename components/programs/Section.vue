<template>
  <section class="programs-section">
    <!-- Hero -->
    <div class="hero-banner">
      <h2>Programs</h2>
    </div>

    <!-- Buttons -->
    <div class="program-buttons">
      <button class="program-btn">Group training</button>
      <button class="program-btn">Private training</button>
    </div>

    <!-- Cards -->
    <div class="program-grid">
      <div class="program-card">
        <img src="/images/pub.png" alt="Flyer" />
        <p class="caption">LOREM IPSUM HAS BEEN THE INDUSTRY'S</p>
      </div>

      <div class="program-card">
        <img src="/images/kids3.png" alt="Kids training" />
        <p class="caption">
          LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
  font-family: Arial, sans-serif;
}

/* Hero */
.hero-banner {
  height: 250px;
  background-image: url("/images/kids1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-banner h2 {
  color: white;
  font-weight: 700;
  font-size: 2.5rem;
}

/* Buttons */
.program-buttons {
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 5px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.program-btn {
  flex: 1;
  background-color: #d2910a;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;       /* Texte un peu plus grand */
  padding: 16px 32px;      /* Plus de hauteur et largeur interne */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 200px;        /* Force une largeur minimale plus visible */
}


.program-btn:hover {
  background-color: #b27707;
}

/* Cards */
.program-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px; /* <-- Espace horizontal entre les deux cartes */
  flex-wrap: nowrap;
  margin-bottom: 100px;
}

.program-card {
  flex: 1;
  max-width: 48%;
  text-align: center;
}

.program-card img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 770px; /* même hauteur que l'affiche flyer */
}

.caption {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0a1931;
  margin-top: 12px;
  text-transform: uppercase;
}
</style>
