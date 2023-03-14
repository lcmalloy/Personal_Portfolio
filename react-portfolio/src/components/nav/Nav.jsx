import React from 'react'

import { IoHomeOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookContent, BiCoffeeTogo } from 'react-icons/bi'
import { RiComputerLine } from 'react-icons/ri'
import './nav.scss'

const Nav = () => {
  return (
    <nav>
      <a href="#"><IoHomeOutline/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookContent/></a>
      <a href="#portfolio"><RiComputerLine/></a>
      <a href="#contact"><BiCoffeeTogo/></a>

    </nav>
  )
}

export default Nav