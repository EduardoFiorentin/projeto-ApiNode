import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MockUserRepository implements IUsersRepository{
    private users: User[] = []
    
    constructor() {
        const userMock = new User({name: 'email', email: "name", password: "password"})
        this.users.push(userMock)
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)
        return user 
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }

    async getUsers(): Promise<User[]> {
        return this.users
    }

    async deleteById(id: string): Promise<boolean> {
        const user = this.users.find(user => user.id === id)
        if (user) {
            this.users = this.users.filter(us => us.id !== id)
            return true
        } else return false
    }

    async updateById(id: string, name: string, email: string, password: string): Promise<User[]> {
        const user = await this.users.filter((us, index) => {
            if(us.id === id) {
                name ? this.users[index].name = name : null
                email ? this.users[index].email = email : null
                password ? this.users[index].password = password : null
                return this.users[index]
            }
        })

        if (user) return user
        return []
    }
}
