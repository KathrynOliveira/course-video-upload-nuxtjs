import * as videoController from "../controller/video";

const router = createRouter();

router.get('/videos', defineEventHandler(videoController.buscaVideos));
router.get('/videos/:id', defineEventHandler(videoController.buscaVideosId));
router.post('/videos', defineEventHandler(videoController.addVideo));
router.put('/videos/:id', defineEventHandler(videoController.alterarVideo));
router.delete('/videos/:id', defineEventHandler(videoController.deletarVideo));

export default useBase("/api/v1", router.handler);