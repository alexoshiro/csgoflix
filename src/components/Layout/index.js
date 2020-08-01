import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import * as S from './styled';

const Layout = ({ children, paddingAll }) => (
  <>
    <Menu />
    <S.Main paddingAll={paddingAll}>
      {children}
    </S.Main>
    <Footer />
  </>
);

export default Layout;
