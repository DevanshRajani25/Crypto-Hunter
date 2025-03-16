import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <>

        <div className='navbar'>
        <div className="logo">
                <h1>Crypto Hunter</h1>
                <FaEthereum color='#9de1fd' size={"25"} />
        </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/coins'>Coins</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Header
