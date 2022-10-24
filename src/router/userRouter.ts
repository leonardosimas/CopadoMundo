import { Router } from 'express'
import { userController } from '../services/UserDependencies'

export const userRouter = Router()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)

