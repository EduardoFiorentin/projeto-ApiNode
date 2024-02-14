import { MockUserRepository } from "../../repositories/implementations/MockUserRepository";
import { MySqlUserRepository } from "../../repositories/implementations/MySqlUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const userRepository = new MySqlUserRepository() 
const deleteUserUseCase = new DeleteUserUseCase(userRepository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController }