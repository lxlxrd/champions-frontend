<template>
  <section class="about-us-section">
    <!-- Hero About Us -->
    <div class="about-hero">
      <h2>About us</h2>
    </div>

    <!-- About Text -->
    <div class="about-text-container">
      <h3>ABOUT US</h3>
      <p>
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
        Since The 1500s, When An Unknown Printer Took A Galley Of Type And
        Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five
        Centuries, But Also The Leap Into Electronic Typesetting, Remaining
        Essentially Unchanged. It Was Popularised In The 1960s With The Release
        Of Letraset Sheets Containing Lorem Ipsum Passages, And More Recently
        With Desktop Publishing Software Like Aldus PageMaker Including Versions
        Of Lorem Ipsum.
      </p>
    </div>

    <!-- Image Section -->
    <section class="about-section">
      <div class="image-container">
        <img src="/images/slide1.jpg" alt="About us" class="about-image" />

        <!-- Carte superposée -->
        <div class="info-card">
          <img src="/images/target.png" alt="Target Icon" class="icon" />
          <p class="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
        </div>
      </div>
    </section>

    <!-- Lower Content -->
    <div class="lower-content">
      <div class="lower-text">
        <h3>LOREM IPSUM LOREM</h3>
        <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. It Has Survived Not Only
          Five Centuries, But Also The Leap Into Electronic Typesetting,
          Remaining Essentially Unchanged. It Was Popularised In The 1960s With
          The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And
          More Recently With Desktop Publishing Software Like Aldus PageMaker
          Including Versions Of Lorem Ipsum.
        </p>
      </div>
      <div class="lower-image">
        <img src="/images/kids3.png" alt="Kids playing soccer" />
      </div>
    </div>

    <div class="lower-content">
      <div class="lower-image">
        <img src="/images/kids.png" alt="Kids playing soccer" />
      </div>
      <div class="lower-text">
        <h3>LOREM IPSUM LOREM</h3>
        <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since The 1500s, When An Unknown Printer Took A Galley Of Type And
          Scrambled It To Make A Type Specimen Book. It Has Survived Not Only
          Five Centuries, But Also The Leap Into Electronic Typesetting,
          Remaining Essentially Unchanged. It Was Popularised In The 1960s With
          The Release Of Letraset Sheets Containing Lorem Ipsum Passages, And
          More Recently With Desktop Publishing Software Like Aldus PageMaker
          Including Versions Of Lorem Ipsum.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.about-us-section {
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
}

/* Hero about us */
.about-hero {
  height: 250px;
  background-image: url("/images/kids1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-hero h2 {
  color: white;
  font-weight: 700;
  font-size: 2.5rem;
}

/* About text */
.about-text-container {
  background: white;
  padding: 3rem 2rem;
  text-align: center;
}

.about-text-container h3 {
  font-weight: 900;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #0a1931;
}

.about-text-container p {
  color: #444;
  font-size: 1rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.5;
}

/* Image full width */
.about-image {
  width: 100%;
  /* border-radius: 12px; */
  /* display: block; */
}

.about-image img {
  width: 100%;
  border-radius: 8px;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  font-size: 1rem; /* augmente par rapport à 14px */
}

.info-card {
  position: absolute;
  bottom: -90px; /* décalage vers le bas */
  left: 30px;
  right: 30px;
  background-color: #d2910a;
  color: white;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px;
  /* border-radius: 12px; */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  min-height: 220px; /* contrôle direct de la hauteur minimum */
}

.icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
  flex-shrink: 0;
}

/* Info Box */
.info-box {
  background-color: #d2910a;
  color: white;
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  gap: 2rem;
  /* border-radius: 8px; */
  margin-bottom: 4rem;
}

.info-icon svg {
  flex-shrink: 0;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 8rem;
}

/* Lower Content */
.lower-content {
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-top: 4rem;
  align-items: stretch;
}

.lower-text {
  flex: 1;
  max-width: 600px;
}

.lower-text h3 {
  font-weight: 900;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #0a1931;
}

.lower-text p {
  color: #444;
  font-size: 1rem;
  line-height: 1.5;
}

.lower-image {
  flex: 1;
  max-width: 500px;
}

.lower-image img {
  width: 100%;
  border: none; /* supprime toute bordure */
  outline: none; /* supprime tout contour */
  border-radius: 0; /* angles non arrondis */
  box-shadow: none;
}

.overlay-card {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #d2910a;
  color: white;
  padding: 20px;
  width: 50%; /* ajuste la largeur selon besoin */
  height: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 0 0 12px 12px;
}
</style>
