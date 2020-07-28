import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.png'

import * as S from '../Button'

import './menu.css'

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" alt="CsgoFlix logo" src={Logo} />
      </Link>

      <S.Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </S.Button>
    </nav>
  )
}

export default Menu