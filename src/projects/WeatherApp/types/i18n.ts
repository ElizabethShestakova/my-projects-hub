import "i18next"

declare module "i18next" {
    interface CustomTypeOptions {
        resources: {
            translation: {
                weatherForecast: string
                search: {
                    typeInCity: string
                    inProgress: string
                    geolocationUnavailable: string
                }
                weather: {
                    clear: string
                    temperature: string
                    feelsLike: string
                }
                units: {
                    metresPerSec: string
                    pressure: string
                }
                errors: {
                    error: string
                    geolocationError: string
                    permissionDenied: string
                    positionUnavailable: string
                    timeout: string
                    unknownError: string
                }
            }
        }
    }
}
