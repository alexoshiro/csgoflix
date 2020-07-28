import React from 'react';

import SocialLinks from '../SocialLinks'

import Logo from '../../assets/img/logo.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alexoshiro.com/">
        <img style={{ height: "60px" }} src={Logo} alt="Logo CSGOFlix" />
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        Desenvolvido por: Alex Oshiro
      </p>
    <SocialLinks />
    </FooterBase >
  );
}

export default Footer;
