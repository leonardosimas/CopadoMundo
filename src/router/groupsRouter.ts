import { Router } from 'express'
import { groupsController } from '../services/GroupsDependencies'

export const groupsRouter = Router()

//****** GET ENDPOINTS *****/
groupsRouter.get("/", groupsController.getAllGroups)
groupsRouter.get("/search", groupsController.getGroupsByName);

//***** POST ENDPOINTS *****/
groupsRouter.post("/createGroup", groupsController.createGroup)

