import { Request, Response } from "express";
import { GroupsBusiness } from "../business/GroupsBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateGroupInputDTO } from "../models/Groups";


export class GroupsController {
    constructor(
        private groupsBusiness: GroupsBusiness
    ) {}

    public createGroup = async (req: Request, res: Response) => {
        try {
            const input: ICreateGroupInputDTO = {
                groupsname: req.body.groupsname,
                description: req.body.description,
                user_id: req.body.user_id,
            }

            const response = await this.groupsBusiness.createGroup(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar o grupo." })
        }
    }

    public getAllGroups = async (req: Request, res: Response) => {
        try {
            const response = await this.groupsBusiness.selectAllGroups()
            console.log("response",response)
            res.status(200).send({ Grupos: response });

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado durante a requisição." })
        }
    }

    public getGroupsByName = async (req: Request, res: Response) =>  {
        try {
            let groupname = req.query.groupname as string;
            
            const response = await this.groupsBusiness.selectGroupsByName(groupname);
            res.status(200).send({ Grupos: response });
        }
        catch (error : any) {
            res.status(500).send({ message: error.message });
        }
    };
    
}