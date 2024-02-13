import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUserCase";

export class GetUsersController {
    constructor (
        private getUsersUserCase: GetUsersUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.getUsersUserCase.execute()
            return res.status(200).json({message: "Request sucessful!", status: 200, data: users})
        } catch (err) {
            return res.status(400).send() 
        }
        
    }
}