import React from "react"
import styled from "styled-components"
import { TbTemperatureCelsius } from "react-icons/tb"
import { Flex } from "../../common/Flex"
import { Grid } from "../../common/Grid"
import { useTranslation } from "react-i18next"

interface TemperatureProps {
    temperature: number
    feelsLike: number
}

const MainTemperature = styled.div`
    color: #ffffff;
    font-size: 64px;
    font-weight: 700;
`

export const Temperature: React.FC<TemperatureProps> = ({ temperature, feelsLike }) => {
    const { t } = useTranslation()
    return (
        <Flex>
            <Grid>
                <MainTemperature>
                    {Math.round(temperature)}
                    <TbTemperatureCelsius />
                </MainTemperature>
                <div>
                    {t("weather.feelsLike")}
                    &nbsp;
                    {Math.round(feelsLike)}
                    <TbTemperatureCelsius />
                </div>
            </Grid>
        </Flex>
    )
}
