import mongoose from "mongoose" 

const review_schema = new mongoose.Schema({

// Referencia a la película
  movieId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Movie", 
    required: true 
  }, 
// Referencia al usuario
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },  

// Calificación del 0 al 10
  rating: { 
    type: Number, 
    required: true, 
    min: 0, 
    max: 10 
  }, 

// Comentario opcional
  comment: { 
    type: String, 
    required: false 
  }, 
}) 

 const Review = mongoose.model("Review", review_schema) 
 export default Review