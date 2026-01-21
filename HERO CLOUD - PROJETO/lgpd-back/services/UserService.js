import userRepository from "../repositories/UserRepository.js"

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel)
}

const getUserById = (id) => {
    return userRepository.saveUser(id)
}

const getAllUsers = () => {
    return userRepository.getAllUsers()
}

const deleteUserById = (id) => {
    return userRepository.deleUserById(id);
}

const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id, userModel)
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default service;