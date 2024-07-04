<template>
    <div>
        <h1>Você assistiu o video de número {{ videoId }}</h1>
        <VideoDetalhes/>
        <VideoControlePlay/>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "exibicao",
    middleware: ["video", "auth"],
})
const route = useRoute();

const videoId = computed(() => route.params.id);
</script>
