import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { BetsDatabase } from "../database/BetsDatabase";
import { GroupsDatabase } from "../database/GroupsDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "./Authenticator";
import { HashManager } from "./HashManager";
import { IdGenerator } from "./IdGenerator";


export const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new GroupsDatabase(),
        new BetsDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
);