import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import type { WeatherData } from "../interfaces/WeatherData"
import { Card } from "./Card"
import { SearchBar } from "./SearchBar"
import { Header } from "./Header"
import { WeatherDetails } from "./WeatherDetails"
import { getWeatherData, getWeatherDataByLocation } from "../services/weatherApi"

export const MainCard: React.FC = () => {
    const { t } = useTranslation()
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [isLoading, setLoading] = useState(false)

    const onSearch = async (city: string) => {
        toast.dismiss()
        setLoading(true)

        try {
            const response = await toast.promise(getWeatherData(city), {
                pending: t("search.inProgress")
            })

            setWeather(response)
        } catch {
            setWeather(null)
            toast.error(t("errors.error"), {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                pauseOnHover: true,
                hideProgressBar: true,
                theme: "light"
            })
        } finally {
            setLoading(false)
        }
    }

    const onGeolocation = async () => {
        toast.dismiss()
        setLoading(true)
        if ("geolocation" in navigator) {
            try {
                const response = await toast.promise(getWeatherDataByLocation(), {
                    pending: t("search.inProgress")
                })

                setWeather(response)
            } catch (error) {
                setWeather(null)
                let errorMessage = t("errors.error")
                if (error instanceof Error) {
                    switch (error.message) {
                        case "geolocationError":
                            errorMessage = t("errors.geolocationError")
                            break
                        case "permissionDenied":
                            errorMessage = t("errors.permissionDenied")
                            break
                        case "positionUnavailable":
                            errorMessage = t("errors.positionUnavailable")
                            break
                        case "timeout":
                            errorMessage = t("errors.timeout")
                            break
                        default:
                            errorMessage = t("errors.unknownError")
                    }
                }

                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    progress: undefined,
                    theme: "light"
                })
            } finally {
                setLoading(false)
            }
        } else {
            toast.warning(t("search.geolocationUnavailable"), {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                progress: undefined,
                theme: "light"
            })
        }
    }

    return (
        <>
            <ToastContainer position="top-center" />
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.3
                }}
            >
                <Card disabled={isLoading}>
                    <Header />
                    <SearchBar onSearch={onSearch} onGeolocation={onGeolocation} />
                    {weather && <WeatherDetails weather={weather} />}
                </Card>
            </motion.div>
        </>
    )
}
