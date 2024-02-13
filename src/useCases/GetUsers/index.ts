import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUserCase";

const postgresUserRepository = new PostgresUserRepository() 
const getUsersUseCase = new GetUsersUseCase(postgresUserRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersController }