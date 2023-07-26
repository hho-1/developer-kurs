import React from 'react'
import resim from "../../assets/nba-logo.png"
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>
        <img src={resim} alt="nba-logo" />
        <h1>NBA Legends</h1>
        <input placeholder='Search player...' type="search" />
    </div>
  )
}

export default Header