import React, { JSX } from "react"
import { TiWeatherCloudy, TiWeatherSunny, TiWeatherDownpour, TiWeatherSnow } from "react-icons/ti"
import { BiCloudDrizzle } from "react-icons/bi"
import { RiThunderstormsLine, RiMistFill } from "react-icons/ri"
import { PiRainbowCloudBold } from "react-icons/pi"

export const firstLetterToUpperCase = (string: string): string => {
    if (typeof string !== "string" || string.length === 0) {
        return string
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getCountryFlag = (countryCode: string): string => {
    return countryCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
}

export const getWeatherIcon = (weatherDescription: string): JSX.Element => {
    const iconProps = {
        fontSize: "24px",
        color: "#e95606"
    }
    const icons: { [key: string]: JSX.Element } = {
        Clear: <TiWeatherSunny {...iconProps} />, //"☀️",
        Clouds: <TiWeatherCloudy {...iconProps} />, //"☁️",
        Rain: <TiWeatherDownpour {...iconProps} />, //"🌧️",
        Drizzle: <BiCloudDrizzle {...iconProps} />, //"🌦️",
        Thunderstorm: <RiThunderstormsLine {...iconProps} />, //"⛈️",
        Snow: <TiWeatherSnow {...iconProps} />, //"❄️",
        Mist: <RiMistFill {...iconProps} /> //"🌫️"
    }

    return icons[weatherDescription] || <PiRainbowCloudBold {...iconProps} /> //"🌈"
}

const PRESSURE_DIVIDER = 1.333
export const getPressure = (pressure: number): number => {
    return Math.round(pressure / PRESSURE_DIVIDER)
}
