<template>
    <div>
        <h1 class="text-4xl text-center">{{ $t('titulo') }}</h1>
        <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            <UCard v-for="video in videos" :key="video.id">
                <template #header>
                    <h2>{{ video.descricao }}</h2>
                </template>

                {{ formataData(video.data_postagem) }}

                <iframe class="h-48 w-full" :src="video.url" title="Youtube video player" frameborder="0" />

                <template #footer>
                    <div class="flex justify-between">
                        <UButton type="button" @click="favoritar(video)">
                            Adicionar Favorito
                        </UButton>
                        <NuxtLink :to="{ name: 'videos-id', params: { id: video.id.toString() } }">
                            <UButton label="Ver vídeo" color="gray">
                                <template #trailing>
                                    <UIcon name="i-heroicons-arrow-right-20-solid" />
                                </template>
                            </UButton>
                        </NuxtLink>
                    </div>
                </template>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">

import type { Video } from '@/interfaces/video';

const { $toast } = useNuxtApp();

onMounted(async () => {
    videos.value = await $fetch('/api/v1/videos')
    // $toast.success("Toast adicionado com sucesso!");
})

const { adicionarFavorito } = useVideoStore();
const videos = ref<Video[]>([]);

// const videos: Video[] = [
//     {
//         id: 1,
//         descricao: "01 - Introdução e Instalação",
//         url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
//         data_postagem: "2023-10-15"
//     },
//     {
//         id: 2,
//         descricao: "02 - Configuração",
//         url: "https://www.youtube.com/embed/JbbB84bnPog?si=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=3",
//         data_postagem: "2023-10-20"
//     },
//     {
//         id: 3,
//         descricao: "03 - Pages",
//         url: "https://www.youtube.com/embed/S99sVicr8NI?si=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=4",
//         data_postagem: "2023-10-25"
//     },
//     {
//         id: 4,
//         descricao: "04 - Components",
//         url: "https://www.youtube.com/embed/cCHWanw49l8?si=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=5",
//         data_postagem: "2023-10-25"
//     }
// ];

const converteDataBrasil = (dataAtual: string) => {
    return new Date(dataAtual).toLocaleString("pt-BR");
};

const favoritar = (video: Video) => {
    adicionarFavorito(video);
    $toast.success("Adicionado aos favoritos!")
}

</script>

<style scoped></style>