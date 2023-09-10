import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import {AsyncMainPage} from "./pages/MainPage/AsyncMainPage";
import {AsyncAboutPage} from "./pages/AboutPage/AsyncAboutPage";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={'loading...'}>
                <Routes>
                    <Route path={'/about'} element={<AsyncAboutPage />}/>
                    <Route path={'/'} element={<AsyncMainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
