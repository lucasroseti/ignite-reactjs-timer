import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'

import logoIgniteSVG from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgniteSVG} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
