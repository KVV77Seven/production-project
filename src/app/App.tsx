import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <button onClick={toggleTheme}>Change theme</button>

            <AppRouter />
        </div>
    );
};

export default App;
