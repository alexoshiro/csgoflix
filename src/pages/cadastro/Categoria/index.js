import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialValues);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://csgoflixapp.herokuapp.com/categories';
    fetch(URL).then(async (data) => {
      const json = await data.json();
      setCategories([...json]);
    });
  }, []);

  function handleCadastroSubmit(e) {
    e.preventDefault();
    setCategories([...categories, category]);
    setCategory(initialValues);
  }

  function setField(key, value) {
    setCategory({
      ...category,
      [key]: value,
    });
  }

  function handleChange(e) {
    setField(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <Layout>
      <h1>
        Cadastro de Categoria:
        {' '}
        {category.name}
      </h1>
      <form onSubmit={handleCadastroSubmit}>
        <FormField
          label="Nome da Categoria"
          value={category.name}
          onChange={handleChange}
          name="name"
          type="text"
        />

        <FormField
          label="Descrição"
          value={category.description}
          onChange={handleChange}
          name="description"
          type="textarea"
        />

        <FormField
          label="Cor"
          value={category.color}
          onChange={handleChange}
          name="color"
          type="color"
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      { categories.length === 0 && (
      <div>
        Carregando...
      </div>
      )}
      <ul>
        {categories.map((c) => (
          <li key={`${c.name}`}>
            {c.name}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir Para Home
      </Link>
    </Layout>
  );
};
export default CadastroCategoria;
