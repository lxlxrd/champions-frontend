<template>
  <footer class="footer-wrapper">
    <!-- CTA Banner -->
    <div class="footer-banner">
      <div class="container">
        <h3>
          LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER BOOK.
        </h3>
        <NuxtLink to="/players/register" class="register-btn">
          Register Now
        </NuxtLink>
      </div>
    </div>

    <!-- Footer Grid -->
    <div class="footer-content container">
      <div class="footer-col logo-col">
        <img src="/logo.png" alt="Logo" class="footer-logo" />
        <p>
          Lorem Ipsum<br />
          Dummy<br />
          Lorem Ipsum Has<br />
          Ipsum Has
        </p>
      </div>

      <div class="footer-col" v-for="(group, index) in links" :key="index">
        <h4>{{ group.title }}</h4>
        <ul>
          <li v-for="(item, i) in group.items" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom container">
      <p>
        Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The
      </p>
      <div class="social-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  {
    title: "LOREM HAS",
    items: ["Lorem Ipsum", "Been", "Dummy", "Simple Text"],
  },
  {
    title: "LOREM HAS",
    items: [
      "Lorem Ipsum",
      "Has Been Dummy",
      "Simple & Dummy Text",
      "Lorem Ipsum Has",
      "Has Been",
    ],
  },
  {
    title: "LOREM HAS",
    items: ["Lorem Ipsum", "Dummy", "Lorem Ipsum Has", "Ipsum Has"],
  },
  {
    title: "LOREM",
    items: ["Lorem Ipsum", "Dummy", "Lorem Ipsum Has", "Ipsum Has"],
  },
];
</script>

<style scoped>
.footer-wrapper {
  background-color: #fff;
  color: #111;
  font-family: Arial, sans-serif;
  width: 100%;
}

/* Conteneur principal pour gérer la largeur */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

/* Banner */
.footer-banner {
  background-color: #d2910a;
  color: white;
  padding: 30px 0;
  text-align: left;
  /* Applique max-width à la bande jaune pour qu'elle soit limitée à la même taille que le footer */
  max-width: 1300px;
  /* Assure que la bande jaune a la même largeur maximale que le footer */
  margin: 0 auto;
  /* Centre la bande jaune dans le footer */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
}

.footer-banner .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  /* Important : éviter le retour à la ligne */
  gap: 20px;
  /* petit écart entre texte et bouton */
}

/* Pour éviter que le h3 prenne trop de place */
.footer-banner h3 {
  font-size: 1.25rem;
  font-weight: 800;
  max-width: calc(100% - 160px);
  /* Laisse de la place au bouton (ajuste la largeur max) */
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  white-space: nowrap;
  /* empêche le texte de passer à la ligne */
  overflow: hidden;
  text-overflow: ellipsis;
  /* ajoute ... si trop long */
}

.register-btn {
  display: inline-block;
  background-color: #e9f0f7;
  color: rgb(180, 109, 29);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.register-btn:hover {
  background-color: #e0e3e7;
}


/* Footer Content */
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 30px;
  padding: 40px 0;
  align-items: flex-start;
}

.footer-col h4 {
  font-weight: 800;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 8px;
  font-size: 14px;
}

.logo-col .footer-logo {
  width: 60px;
  margin-bottom: 10px;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid #ccc;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  flex-wrap: wrap;
}

.social-icons a {
  color: #d2910a;
  margin-left: 12px;
  font-size: 16px;
  transition: color 0.2s;
  font-size: 22px;
  /* taille augmentée */
}

.social-icons a:hover {
  color: #d2910a;
  transform: scale(1.1);
  transition: color 0.2s, transform 0.2s;
}
</style>
