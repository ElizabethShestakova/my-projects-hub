import React from "react"
import { Flex } from "../../common/Flex"
import { FaChartSimple } from "react-icons/fa6"
import { useTranslation } from "react-i18next"
import { getPressure } from "../../common/utils/utils"

interface PressureProps {
    pressure: number
}

export const Pressure: React.FC<PressureProps> = ({ pressure }) => {
    const { t } = useTranslation()
    return (
        <Flex>
            <FaChartSimple color="#e95606" fontSize={"24px"} />
            <div>
                {getPressure(pressure)}
                &nbsp;
                {t("units.pressure")}
            </div>
        </Flex>
    )
}
