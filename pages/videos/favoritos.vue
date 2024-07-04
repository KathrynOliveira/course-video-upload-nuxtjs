<template>
    <div>
        <h1>Videos Favoritos</h1>

        {{ favoritos }}
    </div>
</template>

<script setup lang="ts">
const favoritos = useFavoritos();

</script>

<style lang="scss" scoped>

</style>