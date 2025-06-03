<template>
  <section class="team-section">
    <div class="container">
      <h2 class="section-title">NOTRE EQUIPE</h2>

      <div class="team-grid">
        <div class="team-member" v-for="n in 6" :key="n">
          <img src="/images/profile-logo.png" alt="Team Member" />
          <p class="member-name">LOREM IPSUM</p>
          <p class="member-role">HAS BEEN TEXT IN</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 60px 0;
  background-color: #fff;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #0a1931;
  margin-bottom: 40px;
  text-transform: uppercase;
}

/* Grid with 3 fixed columns and centered rows */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* exactement 3 par ligne */
  gap: 40px 30px;
  justify-content: center;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.team-member img {
  width: 166px;
  height: 166px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #ddd;
}

.member-name {
  font-weight: bold;
  font-size: 0.95rem;
  color: #0a1931;
  margin-top: 12px;
  text-transform: uppercase;
}

.member-role {
  font-size: 0.8rem;
  font-weight: 600;
  color: #0a1931;
  margin-top: 2px;
  text-transform: uppercase;
}
</style>
