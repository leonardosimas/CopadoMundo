import { MatchesBusiness } from "../business/MatchesBusiness";
import { MatchesController } from "../controller/MatchesController";
import { MatchesDatabase } from "../database/MatchesDatabase";
import { Migrations } from "../database/migrations/Migrations";
import { Authenticator } from "./Authenticator";

export const matchesController = new MatchesController(
    new MatchesBusiness(
        new MatchesDatabase(),
        new Migrations(),
        new Authenticator()
    )
);