import { IUsersRepository } from "../IUsersRepository";
import { connection } from "../../infrastructure/dbConnection";
import { User } from "../../entities/User";
import { generateUpdateSqlUser } from "../../utils/generateUpdateUser";

export class MySqlUserRepository implements IUsersRepository {
    constructor(){} 

    async getUsers(): Promise<User[]> {
        const query = 'SELECT * FROM users;'
        console.log(query)
        try {
            const users = await connection.execute(query)
            console.log(users[0])
            return users[0]
        } catch(err) {
            throw new Error("Erro na chamada do banco de dados")
        }
    }

    async deleteById(id: string): Promise<boolean> {
        const query = 'DELETE FROM users WHERE id=?;'
        try {
            const deleteUser = await connection.execute(query, [id])
            console.log(deleteUser)
            if (deleteUser[0].affectedRows > 0) return true
            return false
        } catch(err) {
            console.log(err)
            return false
        }
    }

    async findByEmail(email: string): Promise<User> {
        const query = 'SELECT * FROM users WHERE email=?;'
        try {
            const users = await connection.execute(query, [email])
            return users[0]
        } catch(err) {
            throw new Error("Erro na chamada do banco de dados")
        }
    }

    async save(user: User): Promise<void> {
        const query = 'INSERT INTO users (id, name, email, password) values (?, ?, ?, ?)'
        try {
            const newUser = await connection.execute(query, [user.id, user.name, user.email, user.password])
            return
        } catch (err) {
            console.log(err)
            throw new Error("Erro ao salvar o usuário no banco de dados")
        }
    }

    async updateById(id: string, name: string, email: string, password: string): Promise<User[]> {
        const query = generateUpdateSqlUser({name, email, password})
        console.log(query)

        try {
            const updatedUser = await connection.execute(query, [id])
            console.log(updatedUser)
            return [await this.getUserById(id)]
            
        } catch(err) {
            console.log(err)
            return []
        }
    }




    async getUserById(id: string): Promise<User> {
        const query = 'SELECT * FROM users WHERE id=?;'
        try {
            const users = await connection.execute(query, [id])
            return users[0][0]
        } catch(err) {
            throw new Error("Erro na chamada do banco de dados")
        }
    }
}

