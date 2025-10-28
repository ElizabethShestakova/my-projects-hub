import React from "react"
import { TiWeatherPartlySunny } from "react-icons/ti"
import { useTranslation } from "react-i18next"
import { Flex } from "../common/Flex"

export const Header: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Flex>
            <TiWeatherPartlySunny color="#e95606" fontSize={"24px"} />
            <h2>{t("weatherForecast")}</h2>
        </Flex>
    )
}
