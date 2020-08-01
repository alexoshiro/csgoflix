import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import { Button } from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

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
    setCategories([...categories, values]);
    clearForm();
  }

  return (
    <Layout>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>
      <form onSubmit={handleCadastroSubmit}>
        <FormField
          label="Nome da Categoria"
          value={values.name}
          onChange={handleChange}
          name="name"
          type="text"
        />

        <FormField
          label="Descrição"
          value={values.description}
          onChange={handleChange}
          name="description"
          type="textarea"
        />

        <FormField
          label="Cor"
          value={values.color}
          onChange={handleChange}
          name="color"
          type="color"
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Carregando...
        </div>
      )}
      <ul>
        {categories.map((category) => (
          <li key={`${category.id}`}>
            {category.title}
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
