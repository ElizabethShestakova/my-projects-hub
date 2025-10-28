import React from "react"
import { motion } from "framer-motion"
import { Location } from "./weatherDetails/Location"
import { Temperature } from "./weatherDetails/Temperature"
import { Description } from "./weatherDetails/Description"
import { Humidity } from "./weatherDetails/Humidity"
import { WindSpeed } from "./weatherDetails/Windspeed"
import { Pressure } from "./weatherDetails/Pressure"
import { Divider } from "./weatherDetails/Divider"
import type { WeatherData } from "../interfaces/WeatherData"

interface WeatherDetailsProps {
    weather: WeatherData
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Location cityName={weather.name} countryCode={weather.sys.country} />
            <Temperature temperature={weather.main.temp} feelsLike={weather.main.feels_like} />
            <Divider />
            <Description mainDescription={weather.weather[0].main} description={weather.weather[0].description} />
            <Humidity humidity={weather.main.humidity} />
            <WindSpeed windSpeed={weather.wind.speed} />
            <Pressure pressure={weather.main.pressure} />
        </motion.div>
    )
}
