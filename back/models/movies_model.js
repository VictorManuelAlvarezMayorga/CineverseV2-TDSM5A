import mongoose from "mongoose" 

const movie_schema = new mongoose.Schema({

  title: { 
    type: String, 
    required: true 
  },

  genre: { 
    type: String, 
    required: true 
  },

  releaseDate: { 
    type: Date, 
    required: true 
  }, 

  rating: { 
    type: Number, 
    min: 0, 
    max: 10, 
    required: true 
  },

  description: { 
    type: String 
  }
})


 const Movie = mongoose.model("Movie", movie_schema)
 export default Movie;