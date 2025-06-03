<template>
  <div class="full-width-section px-4">
  <div class="content-wrapper max-w-[1200px] mx-auto flex gap-10">
      <div class="images-grid">
        <img :src="images[0].src" alt="Kids 1" class="small-img" />
        <img :src="images[1].src" alt="Kids 2" class="smallest-img" />
        <img :src="images[2].src" alt="Kids 3" class="medium-img" />
      </div>

      <div class="content">
        <h2>Get A Fair Price For Your Car Sell To Us Today</h2>
        <p>
          We are committed to providing our customers with exceptional service,
          competitive pricing, and a wide range of.
        </p>
        <ul class="list">
          <li><span class="checkmark">✓</span> We are the UK's largest provider, with more patrols in more places</li>
          <li><span class="checkmark">✓</span> You get 24/7 roadside assistance</li>
          <li><span class="checkmark">✓</span> We fix 4 out of 5 cars at the roadside</li>
        </ul>
        <a href="#" class="get-started">Get Started →</a>
      </div>
    </div>
  </div>
</template>


<script setup>
const images = [
    { src: '/images/kids1.png' },
    { src: '/images/kids2.png' },
    { src: '/images/kids3.png' }
]
</script>

<style scoped>
.full-width-section {
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;

  display: flex;
  margin-top: 80px;
  height: 350px;
  /* align-items: flex-start; */ /* optionnel */
}

.full-width-section > .content-wrapper {
  display: flex;
  gap: 400px; /* Augmente ici l'espace horizontal (par défaut tu avais 40px) */
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}




/* Grille pour les images : 2 colonnes x 2 lignes */
.images-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* 2ème colonne plus large */
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 800px; /* augmente un peu la largeur totale pour que la 2ème colonne soit plus large */
  height: 100%;
}


/* Les petites images occupent la première colonne (2 lignes) */
.small-img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
    cursor: pointer;
}

.smallest-img {
  width: 80%;           /* largeur réduite pour les petites images */
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  cursor: pointer;
  justify-self: end;    /* décale les petites images vers la droite dans leur cellule */
}


/* Positionnement des petites images */
.images-grid img:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

.images-grid img:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

/* L'image moyenne occupe la deuxième colonne sur 2 lignes */
.medium-img {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  width: 200%; /* augmente la largeur au-delà de la cellule */
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  justify-self: start; /* aligne à gauche */
}

/* Contenu texte */
.content {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.content h2 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 12px;
    color: #0a1931;
    line-height: 1.2;
}

.content p {
    font-size: 14px;
    margin-bottom: 20px;
    color: #555;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    flex-grow: 1;
}

.list li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
}

.checkmark {
    display: inline-block;
    background-color: #dce6f9;
    color: #2a62bc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}

.get-started {
    display: inline-block;
    background-color: #d2910a;
    color: white;
    padding: 12px 24px;
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.3s;
    align-self: flex-start;
}

.get-started:hover {
    background-color: #b27707;
}
</style>
