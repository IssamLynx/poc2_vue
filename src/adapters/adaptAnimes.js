export const adaptAnimes = (animesFromAPI) => {
  const adaptedAnimes = animesFromAPI.map((anime) => {
    return {
      _id: anime._id,
      type: anime.type,
      title: anime.title,
      image: anime.image,
      ...anime
    }
  })
  return adaptedAnimes
}
