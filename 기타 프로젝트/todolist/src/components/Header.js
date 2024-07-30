import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Header = ({title, leftChild, rightChild}) => {
  const [activePage, setActivePage] = useState("/")

  const currentPageActive = (page) => {
    setActivePage(page)
  }

  return (
    <div>
    <header className='header'>
      <div className='header-left'>{leftChild}</div>
      <div className='header-center'>{title}</div>
      <div className='header-right'>{rightChild}</div>
    </header>
    <div className='nav-menu'>
      <Link to="/" className={activePage === "/" ? "actived-link" : "inactive-link"} onClick={()=>currentPageActive("/")}>TodoList</Link>
      <Link to="/manager" className={activePage === "/manager" ? "actived-link" : "inactive-link"} onClick={()=>currentPageActive("/manager")}>TodoManager</Link>
    </div>
    </div>
  )
}

export default Header