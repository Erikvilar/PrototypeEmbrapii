import React from 'react'
import Nav  from './header/nav'
import "/src/styles/header.scss"
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
