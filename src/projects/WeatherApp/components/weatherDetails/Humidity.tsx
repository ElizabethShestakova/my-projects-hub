import React from "react"
import { Flex } from "../../common/Flex"
import { WiHumidity } from "react-icons/wi"
import { TbPercentage } from "react-icons/tb"

interface HumidityProps {
    humidity: number
}

export const Humidity: React.FC<HumidityProps> = ({ humidity }) => {
    return (
        <Flex>
            <WiHumidity color="#e95606" fontSize={"24px"} />
            <div>
                {humidity}
                &nbsp;
                <TbPercentage />
            </div>
        </Flex>
    )
}
