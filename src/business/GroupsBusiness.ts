import { BetsDatabase } from "../database/BetsDatabase"
import { GroupsDatabase } from "../database/GroupsDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { Group, ICreateGroupInputDTO, ICreateGroupOutputDTO, IDeleteGroupInputDTO, IDeleteGroupOutputDTO } from "../models/Groups"
import { USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"



export class GroupsBusiness {
    constructor(
        private groupsDatabase: GroupsDatabase,
        private betsDatabase: BetsDatabase,
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createGroup = async (input: ICreateGroupInputDTO): Promise<ICreateGroupOutputDTO> => {
        const { groupsname, description, user_id } = input
        

        if (typeof groupsname !== "string") {
            throw new RequestError("Parâmetro 'groupsname' inválido: deve ser uma string.")
        }

        if (typeof description !== "string") {
            throw new RequestError("Parâmetro 'description' inválido: deve ser uma string.")
        }

        if (typeof user_id !== "string") {
            throw new RequestError("Parâmetro 'user_id' inválido: deve ser uma string.")
        }

        if (groupsname.length < 3) {
            throw new RequestError("Parâmetro 'groupsname' inválido: mínimo de 3 caracteres.")
        }

        if (description.length < 3) {
            throw new RequestError("Parâmetro 'description' inválido: mínimo de 3 caracteres.")
        }

        const isGroupAlreadyExists = await this.groupsDatabase.fetchGroupByName(groupsname)
        
        if (isGroupAlreadyExists.length > 0) {
            throw new ConflictError(`Esse grupo ${groupsname} já foi criado.`)
        }

        const isUserExists = await this.userDatabase.findById(user_id)

        if (!user_id) {
            throw new ParamsError ("Usuário não informado(a).")
        } else if (!isUserExists) {
            throw new ConflictError(`Usuário não encontrado(a).`)
        }

        const id = this.idGenerator.generate()
        

        const group = new Group(
            id,
            groupsname,
            description,
            user_id,
        )

        await this.groupsDatabase.createGroup(group)

        const response: ICreateGroupOutputDTO = {
            message: "Grupo criado com sucesso.",
            groupsname
        }

        return response
    }


    public selectAllGroups = async () => {

        
        const result = await this.groupsDatabase.fetchAllGroups()
        
        return result
    }

    public selectGroupsByName = async (search:string) => {

        
        const result:any = await this.groupsDatabase.fetchGroupByName(search)

            if (result.length === 0) {
                throw new NotFoundError ("Grupo não encontrado.");
            }
        
        return result
    }

    public eraseGroup = async (input: IDeleteGroupInputDTO): Promise<IDeleteGroupOutputDTO> => {
        
        const token = input.token as string
        const group_id = input.group_id as string

        if (!token) {
            throw new UnauthorizedError("Token inválido ou faltando");
        }

        const payload: ITokenPayload | any =  this.authenticator.getTokenPayload(token);

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new UnauthorizedError("Somente ADMINS podem deletar um grupo.");
        }

        if (typeof group_id !== "string") {
            throw new RequestError("Parâmetro 'user_id' inválido.")
        }

        const isGroupExists: any = await this.groupsDatabase.findById(group_id)
        
        if (!isGroupExists) {
            throw new NotFoundError ("O grupo não foi encontrado.")
        }

        const deleteBets = await this.betsDatabase.deleteBetsByGroupId(group_id)
        const deleteGroup = await this.groupsDatabase.deleteGroupById(group_id)
        
        const response: IDeleteGroupOutputDTO = {
            message: "Grupo deletado com sucesso."
        }
        return response
    }


    
}