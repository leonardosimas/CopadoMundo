import { GroupsController } from "../controller/GroupsController";
import { GroupsBusiness } from "../business/GroupsBusiness";
import { GroupsDatabase } from "../database/GroupsDatabase";
import { IdGenerator } from "./IdGenerator";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "./Authenticator";
import { BetsDatabase } from "../database/BetsDatabase";


export const groupsController = new GroupsController(
    new GroupsBusiness(
        new GroupsDatabase(),
        new BetsDatabase(),
        new UserDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
);