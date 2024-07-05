<template>
    <div>
        <h1>Videos</h1>

        <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
        <div class="videos">
            <div v-for="video in videos" :key="video.id">
                <h2>{{ video.descricao }}</h2>
                <p>{{ converteDataBrasil(video.data_postagem) }}</p>
                <iframe width="550" height="400" :src="video.url" title="Youtube video player" frameborder="0" />
                <div>
                    <button type="button" @click="adicionarFavorito(video)">
                        Adicionar Favorito
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { Video } from '@/interfaces/video';

const { adicionarFavorito } = useVideoStore();

const videos: Video[] = [
    {
        id: 1,
        descricao: "01 - Introdução e Instalação",
        url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
        data_postagem: "2023-10-15"
    },
    {
        id: 2,
        descricao: "02 - Configuração",
        url: "https://www.youtube.com/embed/JbbB84bnPog?si=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=3",
        data_postagem: "2023-10-20"
    },
    {
        id: 3,
        descricao: "03 - Pages",
        url: "https://www.youtube.com/embed/S99sVicr8NI?si=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=4",
        data_postagem: "2023-10-25"
    },
    {
        id: 4,
        descricao: "04 - Components",
        url: "https://www.youtube.com/embed/cCHWanw49l8?si=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=5",
        data_postagem: "2023-10-25"
    }
];

const converteDataBrasil = (dataAtual: string) => {
    return new Date(dataAtual).toLocaleString("pt-BR");
};

</script>

<style scoped>
.videos {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.videos button {
    display: inline-block;
}
</style>