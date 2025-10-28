import React from "react"
import { Flex } from "../../common/Flex"
import { getWeatherIcon, firstLetterToUpperCase } from "../../common/utils/utils"

interface DescriptionProps {
    mainDescription: string
    description: string
}

export const Description: React.FC<DescriptionProps> = ({ mainDescription, description }) => {
    return (
        <Flex>
            {getWeatherIcon(mainDescription)}
            {firstLetterToUpperCase(description)}
        </Flex>
    )
}
