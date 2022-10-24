import { GroupsController } from "../controller/GroupsController";
import { GroupsBusiness } from "../business/GroupsBusiness";
import { GroupsDatabase } from "../database/GroupsDatabase";
import { IdGenerator } from "./IdGenerator";
import { UserDatabase } from "../database/UserDatabase";


export const groupsController = new GroupsController(
    new GroupsBusiness(
        new GroupsDatabase(),
        new UserDatabase(),
        new IdGenerator(),
    )
);