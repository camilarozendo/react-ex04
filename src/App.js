import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { Suspense } from "react"
import { LoadingScreen } from "./components/LoadingScreen"

export const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<LoadingScreen />}>
                <Outlet />
            </Suspense>            
        </>
    )
}