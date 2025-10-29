import { Flex, Button, Container } from "@radix-ui/themes"
import { FaGamepad } from "react-icons/fa"
import { SiAccuweather } from "react-icons/si"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function Home() {
    const projects = [
        { name: "2048 Game", path: "/my-projects-hub/game2048", iconComponent: <FaGamepad /> },
        { name: "Weather App", path: "/my-projects-hub/weatherApp", iconComponent: <SiAccuweather /> }
    ]

    return (
        <Container size="1">
            <Header />
            <Flex direction="column" gap="2" width="200px" m="auto">
                {projects.map((p) => (
                    <Button key={p.path} size="3" asChild>
                        <Link to={p.path}>
                            {p.iconComponent}
                            {p.name}
                        </Link>
                    </Button>
                ))}
            </Flex>
        </Container>
    )
}
