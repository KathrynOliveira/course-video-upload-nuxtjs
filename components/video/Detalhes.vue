<script setup lang="ts">
const { diasPassados, diferencaEmDias } = useFormatacao()
const dataVideo = new Date(2023, 9, 2);

diasPassados(dataVideo);

</script>
<template>
    <div>
        <h1>Components - Nuxt 3</h1>
        <p>Autor: Pablo Codes</p>
        <p>{{ diferencaEmDias }} dias atrás</p>
    </div>
</template>


<style lang="scss" scoped>

</style>
