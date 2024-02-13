import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute(data: UpdateUserDTO): Promise<User[]> {
        const userList = await this.usersRepository.updateById(data.id, data.name, data.email, data.password)
        return userList
    }
}