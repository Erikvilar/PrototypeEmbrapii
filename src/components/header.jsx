import React from 'react'
import Nav  from './header/nav_header'
import "/src/styles/styles_header/header.scss"
import Hero from './header/hero'
function header () {
  return (
    <header>
        <Nav/>
        <Hero/>
    </header>
  )
}
export default header
