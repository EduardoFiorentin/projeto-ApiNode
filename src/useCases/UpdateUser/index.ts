import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const postgresUserRepository = new PostgresUserRepository() 
const updateUserUSeCase = new UpdateUserUseCase(postgresUserRepository)
const updateUserController = new UpdateUserController(updateUserUSeCase) 

export { updateUserController }