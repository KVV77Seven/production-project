import React, {Suspense, useContext, useTransition} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "widgets/LangSwitcher";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <LangSwitcher/>
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
