import { BetsController } from "../controller/BetsController";
import { BetsBusiness } from "../business/BetsBusiness";
import { BetsDatabase } from "../database/BetsDatabase";
import { GroupsDatabase } from "../database/GroupsDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { IdGenerator } from "./IdGenerator";
import { MatchesDatabase } from "../database/MatchesDatabase";

export const betsController = new BetsController(
    new BetsBusiness(
        new BetsDatabase(),
        new UserDatabase(),
        new GroupsDatabase(),
        new MatchesDatabase(),
        new IdGenerator()
    )
);