export interface IGroupDB {
    id: string,
    groupsname: string,
    description: string;
    user_id: string,
}

export class Group {
    constructor(
        private id: string,
        private groupsname: string,
        private description: string,
        private user_id: string,
        
    ) {}

    public getId = () => {
        return this.id
    }

    public getGroupsname = () => {
        return this.groupsname
    }

    public getDescription = () => {
        return this.description
    }

    public getUser_id = () => {
        return this.user_id
    }
    
    public setId = (newId: string) => {
        this.id = newId
    }

    public setGroupsname = (newGroupsname: string) => {
        this.groupsname = newGroupsname
    }

    public setDescription = (newDescription: string) => {
        this.description = newDescription
    }

    public setUser_id = (newUser_id: string) => {
        this.user_id = newUser_id
    }
}

export interface ICreateGroupInputDTO {
    groupsname: string,
    description: string,
    user_id: string
    
}

export interface ICreateGroupOutputDTO {
    message: string,
    groupsname: string
}

// export interface IDeleteGroupInputDTO {
//     token: string,
//     user_id: string
// }

export interface IDeleteGroupOutputDTO {
    message: string,
}