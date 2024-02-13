import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor (
        private CreateUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        try {
            await this.CreateUserUseCase.execute({
                name,
                email, 
                password
            })

            return res.status(201).json({message: "User created!", status: 201})
        } catch (err) {
            return res.status(400).json({message: "Unexpected error!", status: 400})
        }


    }
}