import { Router } from 'express'
import { matchesController } from '../services/MatchesDependencies';


export const matchesRouter = Router()


//****** GET ENDPOINTS *****/
matchesRouter.get("/", matchesController.getAllMatches)

//***** POST ENDPOINTS *****/
matchesRouter.post("/populate", matchesController.populate);

//***** PUT ENDPOINTS *****/
matchesRouter.put("/:id", matchesController.updateMatches);
matchesRouter.put("/Status/:id", matchesController.updateStatus);