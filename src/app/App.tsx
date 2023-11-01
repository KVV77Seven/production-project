import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { LangSwitcher } from 'widgets/LangSwitcher'

const App = () => {
    const { theme } = useTheme()

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
    )
}

export default App
