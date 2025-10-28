export interface WeatherData {
    name: string
    sys: {
        country: string
    }
    main: {
        temp: number
        feels_like: number
        humidity: number
        pressure: number
    }
    weather: Array<{
        main: string
        description: string
    }>
    wind: {
        speed: number
    }
}
