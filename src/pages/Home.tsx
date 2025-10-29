import { Flex, Button, Heading, Container } from "@radix-ui/themes"
import { MdPets } from "react-icons/md"
import { FaGamepad } from "react-icons/fa"
import { SiAccuweather } from "react-icons/si"
import { Link } from "react-router-dom"

export default function Home() {
    const projects = [
        { name: "2048 Game", path: "/game2048", iconComponent: <FaGamepad /> },
        { name: "Weather App", path: "/weatherApp", iconComponent: <SiAccuweather /> }
    ]

    return (
        <Container size="1">
            <Flex justify="center" gap="2" mt="4" mb="4">
                <MdPets size="24" color="#0090FF" />
                <Heading mb="2">My Pet Projects</Heading>
            </Flex>
            <Flex direction="column" gap="2" width="200px" m="auto">
                {projects.map((p) => (
                    <Button size="3" asChild>
                        <Link key={p.path} to={p.path}>
                            {p.iconComponent}
                            {p.name}
                        </Link>
                    </Button>
                ))}
            </Flex>
        </Container>
    )
}
