<template>
    <div>
        <h1 class="text-4xl text-center">{{ $t('tituloFavoritos') }}</h1>
        <!-- <div class="videos">
            <div v-for="video in favoritos" :key="video.id">
                <h2>{{ video.descricao }}</h2>
                <iframe width="550" height="400" :src="video.url" title="Youtube video player" frameborder="0" />
                <div>
                    <button @click="videoStore.removerFavorito(video.id)">
                        Remover
                    </button>
                </div>
            </div>
        </div> -->
        <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            <UCard v-for="video in favoritos" :key="video.id">
                <template #header>
                    <h2>{{ video.descricao }}</h2>
                </template>

                <iframe class="h-48 w-full" :src="video.url" title="Youtube video player" frameborder="0" />

                <template #footer>
                    <div class="flex justify-between">

                        <NuxtLink :to="{ name: 'videos-id', params: { id: video.id.toString() } }">
                            <UButton @click="videoStore.removerFavorito(video.id)">Remover</UButton>
                        </NuxtLink>
                    </div>
                </template>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore)

</script>

<style lang="scss" scoped></style>