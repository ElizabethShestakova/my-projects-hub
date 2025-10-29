import { Button } from "@radix-ui/themes"
import { TbHomeFilled } from "react-icons/tb"
import { Link, useLocation } from "react-router-dom"

export default function HomeButton() {
    const location = useLocation()
    const isHomePage = location.pathname.includes("my-projects-hub")

    if (isHomePage) {
        return null
    }

    return (
        <div className="absolute top-4 left-4">
            <Link to="/my-projects-hub">
                <Button variant="surface">
                    <TbHomeFilled size="20px" />
                </Button>
            </Link>
        </div>
    )
}
