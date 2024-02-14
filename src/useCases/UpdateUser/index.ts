import { MockUserRepository } from "../../repositories/implementations/MockUserRepository";
import { MySqlUserRepository } from "../../repositories/implementations/MySqlUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const userRepository = new MySqlUserRepository() 
const updateUserUSeCase = new UpdateUserUseCase(userRepository)
const updateUserController = new UpdateUserController(updateUserUSeCase) 

export { updateUserController }