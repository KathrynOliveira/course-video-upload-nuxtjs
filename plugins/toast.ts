import Vue3Toastify, {
    Content,
    toast,
    type ToastContainerOptions,
} from "vue3-toastify";

import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Toastify, {
        autoClose: 5000,
    } as ToastContainerOptions);

    toast.error = (message: Content) =>
        toast(message, {
            type: "error",
            position: "bottom-right"
        })

    toast.success = (message: Content) =>
        toast(message, {
            type: "success",
            position: "bottom-right"
        })

    return {
        provide: {
            toast,
        },
    };
});