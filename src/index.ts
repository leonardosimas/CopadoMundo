import { app } from "./app"
import { betsRouter } from "./router/betsRouter";
import { groupsRouter } from "./router/groupsRouter";
import { matchesRouter } from "./router/matchesRouter";
import { pingRouter } from "./router/pingRouter";
import { userRouter } from "./router/userRouter";

//Chamada para os routers
app.use("/matches", matchesRouter);
app.use("/user", userRouter);
app.use("/groups", groupsRouter)
app.use("/bets" , betsRouter)
app.use("/ping" , pingRouter)





