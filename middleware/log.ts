export default defineEventHandler((event) => {
    console.log("acessando:" + getRequestURL(event));
});