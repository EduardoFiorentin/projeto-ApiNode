import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { User } from "../../entities/User";

export class UpdateUserController {
    constructor(
        private updateUserUseCase: UpdateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { email, name, password } = req.body

        try {
            if (!id) throw new Error("Id param is not defined")
            const updateUser = await this.updateUserUseCase.execute({id, email, name, password})

            if (updateUser.length !== 0) return res.status(201).json({message: "User updated!", status: 201, data: updateUser})
            return res.status(201).json({message: "Id does not exists!", status: 201})

        } catch(err) {
            return res.status(400).json({message: "Unexpected error!", status: 400})
        }
    }
}