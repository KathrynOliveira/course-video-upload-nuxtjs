import { Video } from "~/interfaces/video";
import { sql } from "./../utils";
import { H3Event, readBody, createError } from 'h3';

export const buscaVideos = async (): Promise<Video[]> => {

  throw createError({
      statusCode: 500,
      name: 'Erro ao acessar o banco de dados',
  })
  
  const resultado = await sql({ query: 'SELECT * FROM videos ORDER BY descricao ASC'})
    return resultado as Video[];
};

export const buscaVideosId = async (event: H3Event): Promise<Video> => {
    const request_id = event.context.params?.id as string;
    const resultado = await sql({ query: "SELECT * FROM videos WHERE id = ?", values: [request_id] });
    return resultado[0] as Video;
};

export const addVideo = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event);

    await sql({ 
      query: "INSERT INTO videos (descricao, url, data_postagem) VALUES (?, ?, NOW())", 
      values: [request.descricao, request.url]
    });

    return "Vídeo adicionado com sucesso!"
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: 'Erro ao criar vídeo',
    })
  }
}

export const alterarVideo = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event);

    await sql({ 
      query: "UPDATE videos SET descricao = ?, url = ?, data_postagem = NOW() WHERE id = ?", 
      values: [request.descricao, request.url, request.id]
    });

    return "Vídeo alterado com sucesso!";
  } catch (error) {
    console.error('Erro ao alterar vídeo:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao alterar vídeo',
    });
  }
}

export const deletarVideo = async (event: H3Event): Promise<Video> => {
  try {
    const request_id = event.context.params?.id as string;
    await sql({ query: "DELETE FROM videos WHERE id = ?", values: [request_id] });
    
    return "Vídeo deletado com sucesso!";
    
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao alterar vídeo',
    });
  }
};