// server/api/videos.ts
import { buscaVideos } from '../controller/video';

export default defineEventHandler(async (event) => {
  try {
    const videos = await buscaVideos();
    return { videos };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
