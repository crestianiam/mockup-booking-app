export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().substr(0, 10); // Formato: "YYYY-MM-DD"
}

export const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().substr(0, 10); // Formato: "YYYY-MM-DD"
}