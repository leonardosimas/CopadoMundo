import { Router } from 'express'
import { betsController } from '../services/BetsDependencies';


export const betsRouter = Router()

//***** GET ENDPOINTS *****/
betsRouter.get("/results/:id", betsController.getBetsByGroupID)

//***** PUT ENDPOINTS *****/
betsRouter.put("/:id", betsController.Bet);