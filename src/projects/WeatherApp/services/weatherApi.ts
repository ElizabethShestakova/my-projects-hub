import axios from "axios"
import type { WeatherData } from "../interfaces/WeatherData"

const API_BASE_URL = "https://api.openweathermap.org/data/2.5"
const API_KEY = "82c11c732cb4cb1d0d67c79517856b8a"

export const getWeatherData = async (city: string): Promise<WeatherData> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric",
                lang: "ru"
            }
        })

        return response.data
    } catch (error) {
        throw new Error("Failed to fetch weather")
    }
}

export const getWeatherDataByLocation = async (): Promise<WeatherData> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const response = await axios.get(`${API_BASE_URL}/weather`, {
                    params: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        appid: API_KEY,
                        units: "metric",
                        lang: "ru"
                    }
                })
                resolve(response.data)
            },
            (error: GeolocationPositionError) => {
                let errorMessage = "geolocationError"

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "permissionDenied"
                        break
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "positionUnavailable"
                        break
                    case error.TIMEOUT:
                        errorMessage = "timeout"
                        break
                    default:
                        errorMessage = "unknownError"
                }
                reject(new Error(errorMessage))
            }
        )
    })
}
