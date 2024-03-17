import './Logo.css'
import logo from '../../assets/imgs/logo.jpeg'
import React from 'react'

export default props =>
    <aside className='logo'>
        <a href="/" className="logo">
        <img src={require('../../assets/img/logo.jpeg')} alt="logo" />
        </a>
    </aside>