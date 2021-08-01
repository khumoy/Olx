import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import './App.css'
import { Header } from './Header/Header';
import ThemeContext from './theme-context';
import './Header/Header.css'
// import Categorys from './Categorys';
function App() {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark")
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="container-fluid px-0">
                <Header />

                <Switch >

                </Switch>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
