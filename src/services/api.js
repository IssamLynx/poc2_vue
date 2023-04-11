const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
}

const fetchData = async (link) => {
  const response = await fetch(link, options)
  const data = await response.json()
  return data
}

export const getAllAnime = async (page = 1, size = 30) => {
  const response = await fetchData(
    `${import.meta.env.VITE_APP_API_LINK_ALL_ANIME}?page=${page}&size=${size}`
  )
  return response.data
}

export const getSpecificAnime = async (animeId) => {
  const response = await fetchData(`${import.meta.env.VITE_APP_API_LINK_SPECIFIC_ANIME}/${animeId}`)
  return response
}
