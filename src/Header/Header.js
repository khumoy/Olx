import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from '../theme-context';
import './Header.css'
import LogoImg from './img/logo.png'


console.log(LogoImg)

export const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme)
    return (
        <div className={`header shadow d-flex align-items-center justify-content-around ${theme}`}>
            <div className="logoImg">
                <img className="w-100" src={LogoImg} alt="Logotype" />
            </div>
            <div className=" d-md-flex align-items-center headerPage ">
                <div className="px-2 ms-4">
                    O'Z | РУ
                    <FontAwesomeIcon className="ms-3" icon={faHeart} />
                </div>
                <div className="px-2 ms-3">
                    <FontAwesomeIcon className="me-3" icon={faUser} />
                    Mening Profilim
                </div>
                <Link className={`buttons rounded ms-5 px-3 py-1  ${theme == "dark" ? "light" : "dark"}`}>
                    E'lon berish
                </Link>

            </div>
            <button className={`buttons rounded px-3 py-1  ${theme == "dark" ? "light" : "dark"}`} onClick={toggleTheme} color={theme}>
                {theme == "dark" ? "Night" : "Day"}
            </button>
        </div >
    )
}
