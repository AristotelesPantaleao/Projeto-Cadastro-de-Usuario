import './Logo.css'
import logo from '../../assets/imgs/logo.webp'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='logo'>
        <Link to="/" className="logo">
        <img src={require('../../assets/imgs/logo.webp')} alt="logo"/>
        </Link>
    </aside>