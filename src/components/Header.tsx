import { MdPets } from "react-icons/md"
import { Flex, Heading } from "@radix-ui/themes"

export default function Header() {
    return (
        <Flex justify="center" gap="2" mt="4" mb="4">
            <MdPets size="24" color="#0090FF" />
            <Heading mb="2">My Pet Projects</Heading>
        </Flex>
    )
}
