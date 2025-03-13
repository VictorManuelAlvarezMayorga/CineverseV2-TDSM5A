import Movie from "../models/movies_model.js" 


// Agregar una nueva pelicula
export const createMovie = async (req, res) => {
  try {
    const { title, genre, releaseDate, rating, description } = req.body 
    const new_movie = new Movie({ title, genre, releaseDate, rating, description }) 
    await new_movie.save() 
    res.status(201).json(new_movie) 
  } catch (error) {
    res.status(400).json({ message: "Error al crear la pelicula", error }) 
  }
} 

// Ver todas las peliculas
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find() 
    res.status(200).json(movies) 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las peliculas", error }) 
  }
} 

// Ver una sola pelicula
export const getMovie = async (req, res) => {
  try {
    const { id } = req.params 
    const movie = await Movie.findById(id) 
    if (!movie) {
      return res.status(404).json({ message: "Pelicula no encontrada" }) 
    }
    res.status(200).json(movie) 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la Pelicula", error }) 
  }
} 

// Actualizar una pelicula
export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params 
    const updatedData = req.body 
    const updatedMovie = await Movie.findByIdAndUpdate(id, updatedData, { new: true }) 
    if (!updatedMovie) {
      return res.status(404).json({ message: "Pelicula no encontrada" }) 
    }
    res.status(200).json(updatedMovie) 
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la Pelicula", error }) 
  }
} 

// Eliminar una pelicula
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params 
    const deletedMovie = await Movie.findByIdAndDelete(id) 
    if (!deletedMovie) {
      return res.status(404).json({ message: "Pelicula no encontrada" }) 
    }
    res.status(200).json({ message: "Pelicula eliminada con exito" }) 
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la Pelicula", error }) 
  }
} 
