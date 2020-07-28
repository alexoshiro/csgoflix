import React from 'react'
import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';

const CadastroCategoria = () => (
  <Layout>
    <h1>Cadastro de Categoria</h1>
    <form>
      <label>
        Nome da Categoria:
          <input
          type="text"
        />
      </label>

      <button>
        Cadastrar
        </button>
    </form>
    <Link to="/">
      Ir Para Home
    </Link>
  </Layout>
)

export default CadastroCategoria