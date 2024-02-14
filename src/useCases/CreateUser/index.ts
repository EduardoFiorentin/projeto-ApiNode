import { MockUserRepository } from "../../repositories/implementations/MockUserRepository";
import { MySqlUserRepository } from "../../repositories/implementations/MySqlUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new MySqlUserRepository() 

const createUserUseCase = new CreateUserUseCase(
    userRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController}