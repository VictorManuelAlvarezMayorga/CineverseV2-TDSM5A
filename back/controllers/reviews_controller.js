import Review from "../models/reviews_model.js" 




// Agregar una nueva resena
export const createReview = async (req, res) => {
  try {
    const { movieId, userId, rating, comment } = req.body 
    const newReview = new Review({ movieId, userId, rating, comment }) 
    await newReview.save() 
    res.status(201).json(newReview) 
  } catch (error) {
    res.status(400).json({ message: "Error al crear la resena", error }) 
  }
} 

// Ver todas las resenas de una pelicula
export const getReviewsByMovie = async (req, res) => {
  try {
    const { movieId } = req.params 
    const reviews = await Review.find({ movieId }).populate("userId", "name") 
    res.status(200).json(reviews) 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las resenas", error }) 
  }
} 

//Actualizar una resena
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params 
    const updatedData = req.body 

    // Actualizar la resena en la base de datos
    const updatedReview = await Review.findByIdAndUpdate(id, updatedData, { new: true }) 

    if (!updatedReview) {
      return res.status(404).json({ message: "Resena no encontrada" }) 
    }

    res.status(200).json(updatedReview) 
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la resena", error }) 
  }
} 


// Eliminar una resena
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params 
    await Review.findByIdAndDelete(id) 
    res.status(200).json({ message: "Resena eliminada con exito" }) 
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la resena", error }) 
  }
} 
