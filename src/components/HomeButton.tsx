import { Button } from "@radix-ui/themes"
import { TbHomeFilled } from "react-icons/tb"
import { Link } from "react-router-dom"
import { useIsHomePage } from "../hooks/useIsHomePage"

export default function HomeButton() {
    const { isHomePage } = useIsHomePage()

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
