import React from 'react'
import { Link } from 'react-router-dom';

import * as S from './styled'
import Layout from '../../components/Layout';

const PageNotFound = () => (
  <Layout>
    <S.NotFoundWrapper>
      <S.NotFoundText>404 página não encontrada!</S.NotFoundText>
      <Link to="/">Voltar para Home</Link>
    </S.NotFoundWrapper>
  </Layout>
)

export default PageNotFound