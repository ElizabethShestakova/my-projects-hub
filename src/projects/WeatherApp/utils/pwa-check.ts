export const checkPWA = () => {
    // Проверка, установлено ли как PWA
    if (window.matchMedia("(display-mode: standalone)").matches) {
        console.log("Запущено как PWA")
    }

    // Проверка поддержки
    if ("serviceWorker" in navigator) {
        console.log("Service Worker поддерживается")
    }
}
