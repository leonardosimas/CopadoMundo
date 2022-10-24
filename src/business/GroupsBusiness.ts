import { GroupsDatabase } from "../database/GroupsDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { Group, ICreateGroupInputDTO, ICreateGroupOutputDTO } from "../models/Groups"
import { IdGenerator } from "../services/IdGenerator"



export class GroupsBusiness {
    constructor(
        private groupsDatabase: GroupsDatabase,
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator
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
        
        if (isGroupAlreadyExists) {
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


    
}