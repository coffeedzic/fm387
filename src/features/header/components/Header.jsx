import React from 'react'

import WebHeader from './WebHeader'
import MobileHeader from './MobileHeader'

import '../styles/Header.css'

const Header = () => {
  return(
    <header>
      <WebHeader />
      <MobileHeader />
    </header>
  )
}

export default Header