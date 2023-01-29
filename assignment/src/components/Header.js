import React from 'react'
import Navbar from './Navbar'
import Middle from './Middle'
const Header = () => {
  return (
    <div>
        <div className="header">
            <Navbar />
        </div>
        <div>
        <Middle />
        </div>
    </div>
  )
}

export default Header