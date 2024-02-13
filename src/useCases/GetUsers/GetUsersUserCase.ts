import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute(): Promise<User[]> {
        const users = await this.usersRepository.getUsers()
        return users
    }
}