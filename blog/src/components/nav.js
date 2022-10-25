import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import Menu from './menu';
import '../css/nav.css';

function Nav(props) {

    return (
        <div className="nav">
            <div className="menu-icon-container">
                <div className="menu-icon" onClick={props.toggleMenu}></div>
            </div>
        </div>
    )
}

export default Nav;