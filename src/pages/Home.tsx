import { Flex, Text, Button, Heading, Box } from "@radix-ui/themes"
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
        <Flex direction="column" gap="2" mt="4">
            <Flex justify="center" gap="2">
                <MdPets size="24" color="#0090FF" />
                <Heading mb="2">My Pet Projects</Heading>
            </Flex>
            {projects.map((p) => (
                <Link key={p.path} to={p.path}>
                    <Button size="3">
                        {p.iconComponent}
                        {p.name}
                    </Button>
                </Link>
            ))}
        </Flex>
    )
}
