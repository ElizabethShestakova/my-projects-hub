import React from "react"
import { Flex } from "../../common/Flex"
import { FaWind } from "react-icons/fa"
import { useTranslation } from "react-i18next"

interface WindSpeedProps {
    windSpeed: number
}

export const WindSpeed: React.FC<WindSpeedProps> = ({ windSpeed }) => {
    const { t } = useTranslation()
    return (
        <Flex>
            <FaWind color="#e95606" fontSize={"24px"} />
            <div>
                {Math.round(windSpeed)}
                &nbsp;
                {t("units.metresPerSec")}
            </div>
        </Flex>
    )
}
