import { IDeleteUserDB, IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Projeto_Bolao_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            nickname: user.getNickname(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await this.getConnection()(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })

        return result[0]
    }

    public findById = async (id: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await this.getConnection()(UserDatabase.TABLE_USERS)
            .select()
            .where({ id })

        return result[0]
    }

    public createUser = async (user: User): Promise<void> => {
        const userDB = this.toUserDBModel(user)

        await this.getConnection()(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public deleteUser = async (delUser: string): Promise<void> => {
            
            await this.getConnection()(UserDatabase.TABLE_USERS)
            .delete()
            .where({id: delUser})
    }
}