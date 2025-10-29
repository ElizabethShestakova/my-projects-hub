import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Game2048 from "./pages/Game2048"
import WeatherApp from "./pages/WeatherApp"
import HomeButton from "./components/HomeButton"

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/my-projects-hub/" element={<Home />} />
                <Route path="/game2048" element={<Game2048 />} />
                <Route path="/weatherApp" element={<WeatherApp />} />
            </Routes>
            <HomeButton />
        </Router>
    )
}
