<template>
    <div>
        <h1>Videos Favoritos</h1>
        <div class="videos">
            <div v-for="video in favoritos" :key="video.id">
                <h2>{{ video.descricao }}</h2>
                <iframe
                    width="550"
                    height="400"
                    :src="video.url"
                    title="Youtube video player"
                    frameborder="0"
                />
                <div>
                    <button @click="removerFavorito(video.id)">
                        Remover
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// const favoritos = useFavoritos();

const { removerFavorito } = useVideoStore();

// const removerFavorito = (id: Number) => {
//     const favoritosFiltrados = favoritos.value.filter((x) => x.id !== id);
//     favoritos.value = favoritosFiltrados;
// };

</script>

<style lang="scss" scoped>

</style>