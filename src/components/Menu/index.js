import React from 'react'
import Logo from '../../assets/img/logo.png'

import * as S from '../Button'

import './menu.css'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" alt="CsgoFlix logo" src={Logo} />
      </a>

      <S.Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </S.Button>
    </nav>
  )
}

export default Menu