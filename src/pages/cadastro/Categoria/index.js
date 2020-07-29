import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../../components/Layout'
import FormField from '../../../components/FormField'

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(initialValues)

  function handleChange(e) {
    setField(e.target.getAttribute('name'), e.target.value)
  }

  function handleCadastroSubmit(e) {
    e.preventDefault()
    setCategories([...categories, category])
    setCategory(initialValues)
  }

  function setField(key, value) {
    setCategory({
      ...category,
      [key]: value
    })
  }

  return (
    <Layout>
      <h1>Cadastro de Categoria: {category.name}</h1>
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
          type="textArea"
        />
        
        <FormField
          label="Cor"
          value={category.color}
          onChange={handleChange}
          name="color"
          type="color"
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>)
        })}
      </ul>
      <Link to="/">
        Ir Para Home
    </Link>
    </Layout>
  )

}
export default CadastroCategoria