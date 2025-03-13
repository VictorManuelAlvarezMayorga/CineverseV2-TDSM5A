import User from "../models/users_model.js"




// Crear usuario
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body 
    const new_user = new User({ name, email, password }) 
    await new_user.save() 
    res.status(201).json(new_user) 
  } catch (error) {
    res.status(400).json({ message: "Error al crear el usuario", error }) 
  }
} 

// Ver todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find() 
    res.status(200).json(users) 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error }) 
  }
} 

//Modificar un usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params 
    const updateData = req.body 

    // Encuentra y actualiza el usuario por su ID
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true }) 

    if (!updatedUser) {
      return res.status(404).json({ message: "Usuario no encontrado" }) 
    }

    res.status(200).json({ message: "Usuario actualizado con exito", user: updatedUser }) 
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error }) 
  }
} 


// Eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params 
    await User.findByIdAndDelete(id) 
    res.status(200).json({ message: "Usuario eliminado con exito" }) 
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error }) 
  }
} 
