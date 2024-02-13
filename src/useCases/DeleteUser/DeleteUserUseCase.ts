import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IDeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute({id}: IDeleteUserDTO): Promise<boolean> {
        const deleteUser = await this.usersRepository.deleteById(id)
        return deleteUser
    }
}