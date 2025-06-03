<template>
    <div>
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>{{ title }}
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
        //  Ce component accepte une prop "title" pour afficher un message de chargement
        title: String
    }
}
</script>

<style></style>