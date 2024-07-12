import { Video } from "~/interfaces/video";

export default defineEventHandler(() => {
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
    return {
        videos: videos,
    }
});