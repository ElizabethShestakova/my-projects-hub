import { Link } from "react-router-dom"

export default function Home() {
    const projects = [
        { name: "2048 Game", path: "/game2048" },
        { name: "Weather App", path: "/weatherApp" }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 dark:from-slate-800 dark:to-slate-900 text-center p-6">
            <h1 className="text-4xl font-bold mb-8 text-amber-700 dark:text-amber-300">🌟 My Pet Projects</h1>

            <div className="grid gap-6 max-w-md mx-auto">
                {projects.map((p) => (
                    <Link
                        key={p.path}
                        to={p.path}
                        className="block py-4 rounded-2xl font-semibold text-lg
              bg-gradient-to-br from-white to-amber-100 dark:from-slate-700 dark:to-slate-800
              shadow-[4px_4px_8px_rgba(0,0,0,0.25),-3px_-3px_6px_rgba(255,255,255,0.7)]
              hover:scale-105 active:scale-95 transition-transform duration-150"
                    >
                        {p.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}
