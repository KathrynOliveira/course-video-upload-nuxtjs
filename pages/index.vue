<template>
    <div>
        <h1 class="text-5xl text-center">Página Inicial</h1>

        {{ user }}
    </div>
</template>

<script setup>
const { user } = useUserSession();
useHead({
    title: 'Kathryn Oliveira - Tutoriais',
    meta: [
        {
            name: 'description',
            content: 'Site de tutorias de VueJs/Nuxt'
        }
    ]
})

</script>
