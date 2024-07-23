const savePokemonId = (id) => {
  try {
    localStorage.setItem('pokemonId', id)
  } catch (error) {
    console.error("error", error)
  }
}

const loadPokemonId = () => {
  try {
    const id = localStorage.getItem('pokemonId')
    return id ? parseInt(id, 10) : null
  } catch (error) {
    console.error("error", error)
    return null
  }
}