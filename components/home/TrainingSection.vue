<template>
    <section class="training-section">
        <div v-for="(training, index) in trainings" :key="index" class="training-card"
            :style="{ backgroundImage: `url(${training.image})` }">
            <div class="overlay"></div>
            <div class="content">
                <h3>{{ training.title }}</h3>
                <p>{{ training.subtitle }}</p>
                <a href="#" class="btn">Get Started →</a>
            </div>
        </div>
    </section>
</template>

<script setup>
const trainings = [
    {
        title: "Group training",
        subtitle: "We are committed to providing our customers with exceptional service",
        image: "/images/kids2.png",
    },
    {
        title: "Private training",
        subtitle: "We are committed to providing our customers with exceptional service",
        image: "/images/kids3.png",
    },
];
</script>

<style scoped>
.training-section {
    display: flex;
    gap: 60px;
    /* espace horizontal entre les cards */
    max-width: 900px;
    margin: 80px auto 0;
}

.training-card {
    flex: 1.5;
    position: relative;
    height: 300px;
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    color: white;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    box-shadow: 0 4px 10px rgb(0 0 0 / 0.2);
    cursor: pointer;
    transition: transform 0.3s ease;
}

.training-card:hover {
    transform: scale(1.03);
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    z-index: 0;
}

.content {
    position: relative;
    z-index: 1;
    max-width: 250px;
}

.content h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
}

.content p {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.4;
}

.btn {
    display: inline-block;
    background-color: white;
    color: #0a1931;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.15);
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #e1e1e1;
}
</style>
