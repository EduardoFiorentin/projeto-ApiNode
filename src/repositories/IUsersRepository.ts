import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    deleteById(id: string): Promise<boolean>
    save(user: User): Promise<void>
    getUsers(): Promise<User[]>
    updateById(id: string, name: string, email: string, password: string): Promise<User[]>
}