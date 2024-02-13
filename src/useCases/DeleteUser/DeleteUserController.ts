import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id
        
        try {
            const deleteUser = await this.deleteUserUseCase.execute({id})

            if (deleteUser) return res.status(201).json({message: "User deleted!", status: 201})
            else return res.status(201).json({message: "User does not exists!", status: 201})

        } catch(err) {
            return res.status(400).json({message: "Unexpected error!", status: 400})
        }
    }
}