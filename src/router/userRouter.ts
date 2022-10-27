import { Router } from 'express'
import { userController } from '../services/UserDependencies'

export const userRouter = Router()

//***** POST ENDPOINTS *******/
userRouter.post("/signup", userController.signup)

//***** PUT ENDPOINTS ********/
userRouter.post("/login", userController.login)

//***** DELETE ENDPOINTS *****/
userRouter.delete("/delete/:id", userController.delete)

