import config from '../config';

const CATEGORIES_URL = `${config.URL}/categories`;

function getAll() {
  return fetch(`${CATEGORIES_URL}`)
    .then(async (data) => {
      if (data.ok) {
        const resposta = await data.json();
        return resposta;
      }

      throw new Error('Erro ao buscar dados de categorias');
    });
}

function getAllWithVideos() {
  return fetch(`${CATEGORIES_URL}?_embed=videos`)
    .then(async (data) => {
      if (data.ok) {
        const json = await data.json();

        return json;
      }

      throw new Error('Erro ao buscar dados de categorias');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
