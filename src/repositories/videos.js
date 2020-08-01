import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(videoData) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoData),
  })
    .then(async (data) => {
      if (data.ok) {
        const resposta = await data.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados!');
    });
}

export default {
  create,
};
