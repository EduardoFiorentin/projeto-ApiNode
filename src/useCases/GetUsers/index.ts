import { MockUserRepository } from "../../repositories/implementations/MockUserRepository";
import { MySqlUserRepository } from "../../repositories/implementations/MySqlUserRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUserCase";

const userRepository = new MySqlUserRepository() 
const getUsersUseCase = new GetUsersUseCase(userRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersController }