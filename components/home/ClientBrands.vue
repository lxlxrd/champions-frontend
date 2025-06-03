<template>
    <div class="client-brands">
        <div class="text">Trusted by the best in the world</div>
        <div class="logos">
            <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt"
                style="width: 100px; height: 50px;" />
        </div>
    </div>
</template>



<script setup>
const logos = [
    { src: '/logos/google.png', alt: 'Google' },
    { src: '/logos/atlasian.png', alt: 'Atlasian' },
    { src: '/logos/canon.png', alt: 'Canon' },
    { src: '/logos/walmart.png', alt: 'Walmart' },
    { src: '/logos/amazon.png', alt: 'Amazon' }
]
</script>

<style scoped>
.client-brands {
    display: flex;
    flex-direction: column;
    /* pour empiler verticalement */
    align-items: center;
    /* centrer horizontalement */
    gap: 10px;
    /* espacement entre texte et logos */
    max-width: 700px;
    margin: 0 auto;
    /* centrer le container dans la page */
}

.text {
    font-size: 14px;
    color: #000;
    text-align: center;
    /* centrer le texte */
    white-space: nowrap;
    font-weight: bold;
    /* texte en gras */
}

.logos {
    display: flex;
    gap: 28px;
    justify-content: center;
    flex-wrap: nowrap;
}

.logos img {
    width: 100px;
    height: 50px;
}
</style>
