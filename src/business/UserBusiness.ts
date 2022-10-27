import { UserDatabase } from "../database/UserDatabase"
import { GroupsDatabase } from "../database/GroupsDatabase"
import { BetsDatabase } from "../database/BetsDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { IDeleteInputDTO, IDeleteOutputDTO, IDeleteUserDB, ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, ISignupOutputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private groupsDatabase: GroupsDatabase,
        private betsDatabase: BetsDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
        const { name, nickname, email, password } = input
        let role = input.role

        if (typeof name !== "string") {
            throw new RequestError("Parâmetro 'name' inválido: deve ser uma string.")
        }

        if (typeof nickname !== "string") {
            throw new RequestError("Parâmetro 'nickname' inválido: deve ser uma string.")
        }

        if (typeof email !== "string") {
            throw new RequestError("Parâmetro 'email' inválido: deve ser uma string.")
        }

        if (typeof password !== "string") {
            throw new RequestError("Parâmetro 'password' inválido: deve ser uma string.")
        }

        if (name.length < 3) {
            throw new RequestError("Parâmetro 'name' inválido: mínimo de 3 caracteres.")
        }

        if (nickname.length < 3) {
            throw new RequestError("Parâmetro 'nickname' inválido: mínimo de 3 caracteres.")
        }

        if (password.length < 6) {
            throw new RequestError("Parâmetro 'password' inválido: mínimo de 6 caracteres.")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new RequestError("Parâmetro 'email' inválido")
        }

        if(!role) {
            role = USER_ROLES.NORMAL
        } 

        if (!Object.values(USER_ROLES)?.includes(role)) {
            throw new ParamsError ("O parâmetro 'USER_ROLE' deve ser 'NORMAL' , 'PREMIUM' ou 'ADMIN'.")
        }

        const isEmailAlreadyExists = await this.userDatabase.findByEmail(email)
        
        if (isEmailAlreadyExists) {
            throw new ConflictError("Email já cadastrado.")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            nickname,
            email,
            hashedPassword,
            role
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ISignupOutputDTO = {
            message: "Cadastro realizado com sucesso.",
            token
        }

        return response
    }

    public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
        const { email, password } = input

        if (typeof email !== "string") {
            throw new RequestError("Parâmetro 'email' inválido.")
        }

        if (typeof password !== "string") {
            throw new RequestError("Parâmetro 'password' inválido.")
        }

        if (password.length < 6) {
            throw new RequestError("Parâmetro 'password' inválido: mínimo de 6 caracteres.")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new RequestError("Parâmetro 'email' inválido.")
        }

        const userDB = await this.userDatabase.findByEmail(email)
        
        if (!userDB) {
            throw new NotFoundError("Email não cadastrado.")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.nickname,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(
            password,
            user.getPassword()
        )

        if (!isPasswordCorrect) {
            throw new UnauthorizedError("Password incorreto.")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ILoginOutputDTO = {
            message: "Login realizado com sucesso.",
            token
        }

        return response
    }

    public deleteUser = async (input: IDeleteInputDTO): Promise<IDeleteOutputDTO> => {
        const { token, user_id} = input;
        

        if (!token) {
            throw new UnauthorizedError("Token inválido ou faltando");
        }

        const payload: ITokenPayload | any =  this.authenticator.getTokenPayload(token);

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new UnauthorizedError("Somente ADMINS podem deletar um usuário.");
        }

        if (typeof user_id !== "string") {
            throw new RequestError("Parâmetro 'user_id' inválido.")
        }

        const isUserExists: any = await this.userDatabase.findById(user_id)
        console.log(isUserExists)
        if (isUserExists.length < 0) {
            throw new NotFoundError ("O usuário não foi encontrado.")
        }

        const deleteBets = await this.betsDatabase.deleteBets(user_id)
        const deleteGroup = await this.groupsDatabase.deleteGroup(user_id)
        const deleteUser = await this.userDatabase.deleteUser(user_id)
        
        const response: IDeleteOutputDTO = {
            message: "Usuário deletado com sucesso."
        }
        return response
    }
}