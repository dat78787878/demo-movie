const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'bc3da08def0bc308b09acedbe4c58477',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;