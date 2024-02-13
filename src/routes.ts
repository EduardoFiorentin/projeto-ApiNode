import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getUsersController } from "./useCases/GetUsers";
import { deleteUserController } from "./useCases/DeleteUser";
import { updateUserController } from "./useCases/UpdateUser";

const router = Router() 

router.get('/users', (req: Request, res: Response) => {
    return getUsersController.handle(req, res)
})

router.post('/users', (req: Request, res: Response) => {
    return createUserController.handle(req, res)
})

router.delete('/users/:id', (req: Request, res: Response) => {
    return deleteUserController.handle(req, res)
})

router.put('/users/:id',(req: Request, res: Response) => {
    return updateUserController.handle(req, res)
})


export { router }