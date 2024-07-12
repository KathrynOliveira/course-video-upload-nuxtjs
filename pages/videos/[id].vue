<template>
    <div>
        <VideoControlePlay />

        <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="solid" label="Editar"
            :trailing="false" @click="abrirModal" />

           
            <UModal v-model="isOpen" :overlay="false">
                <div class="p-4">
                    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
                        <UFormGroup label="Descrição" name="descricao">
                            <UInput v-model="state.descricao" />
                        </UFormGroup>

                        <UFormGroup label="Url" name="url">
                            <UInput v-model="state.url" type="url" />
                        </UFormGroup>

                        <UButton type="submit">
                            Enviar
                        </UButton>
                    </UForm>
                </div>
            </UModal>

        <UCard class="w-[800px] justify-center">
            <template #header>
                <h2>{{ video.descricao }}</h2>
            </template>

            <iframe class="h-[800px] w-full" :src="video.url" title="Youtube video player" frameborder="0" />

        </UCard>
        <UButton icon="i-heroicons-pencil-square" size="sm" color="error" variant="solid" label="Deletar"
            :trailing="false" @click="deletarVideo" />
    </div>
</template>

<script setup lang="ts">
import type { Video } from '~/interfaces/video';
const isOpen = ref(false);
const route = useRoute();
const video = ref<Video>({} as Video);

onMounted(async () => {
    video.value = await $fetch(`/api/v1/videos/${route.params.id}`);
})

const router = useRouter();
const { $toast } = useNuxtApp();

const state = reactive({
    id: 0,
    descricao: '',
    url: ''
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.descricao) errors.push({ path: 'descricao', message: 'Required' })
    if (!state.url) errors.push({ path: 'url', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    try {
        await $fetch(`/api/v1/videos/${route.params.id}`, {
            method: "PUT",
            body: state
        });
        router.push("/videos");
        $toast.success("Vídeo atualizado com sucesso!");
        isOpen.value =  false;

    } catch (error) {
        $toast.error("Erro ao atualizar o vídeo.")
    }
}

const abrirModal = () => {
    state.id = video.value.id;
    state.descricao = video.value.descricao;
    state.url = video.value.url;
    isOpen.value = true;
}

const deletarVideo = async () => {
    try {
        await $fetch(`/api/v1/videos/${route.params.id}`, {
            method: "DELETE",
            body: state
        });
        router.push("/videos");
        $toast.success("Vídeo deletado com sucesso!");
        isOpen.value =  false;

    } catch (error) {
        $toast.error("Erro ao deletar o vídeo.")
    }
}
</script>
