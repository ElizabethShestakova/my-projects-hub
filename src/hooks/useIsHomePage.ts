import { useLocation } from "react-router-dom"

export function useIsHomePage() {
    const location = useLocation()
    const base = "/my-projects-hub/"
    const path = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/"
    const isHomePage = path === base
    return { isHomePage }
}
