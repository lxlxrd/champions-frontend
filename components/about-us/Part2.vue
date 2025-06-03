<template>
  <section class="dark-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <h2>LOREM IPSUM</h2>
        <div class="stat-box">
          <span>25+</span>
          <small>Years experience</small>
        </div>
      </div>

      <!-- Image with text -->
      <div class="image-wrapper">
        <img src="/images/kids1.png" alt="Team playing" />
      </div>

      <!-- Info cards -->
      <div class="info-row">
        <div class="info-box" v-for="i in 3" :key="i">
          <h4>LOREM HAS</h4>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dark-section {
  background-color: #0a1931;
  color: white;
  padding: 60px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header section */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 2rem;
  font-weight: 800;
}

.stat-box {
  text-align: right;
}

.stat-box span {
  font-size: 2rem;
  font-weight: bold;
  display: block;
}

.stat-box small {
  font-size: 0.9rem;
  color: #d4d4d4;
}

/* Image styling */
.image-wrapper {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Info boxes */
.info-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.info-box {
  background-color: transparent;
  border-top: 2px solid #fff;
  padding-top: 10px;
  flex: 1;
  min-width: 250px;
}

.info-box h4 {
  font-weight: 700;
  margin-bottom: 5px;
}

.info-box p {
  font-size: 0.9rem;
  color: #d4d4d4;
}
</style>
