import { Request, Response } from "express";
import { MatchesBusiness } from "../business/MatchesBusiness";
import { BaseError } from "../errors/BaseError";
import { IUpdateMatchesInputDTO } from "../models/Matches";


export class MatchesController {

    constructor(
        private matchesBusiness: MatchesBusiness
    ) {}

        //******************************************************************/
        //*********************   MÉTODO - POPULATE   **********************/
        //******************************************************************/
        public populate = async (req: Request, res: Response) => {
            try {
                const response = await this.matchesBusiness.populate();
                res.status(201).send({ message: "Banco de dados criado e dados inseridos com sucesso." });
            }
            catch (error:any) {
                res.status(500).send({ message: error.message });
            }
        };

        //******************************************************************/
        //****************   MÉTODO - ATUALIZAR JOGOS   ********************/
        //******************************************************************/

        public updateMatches = async (req: Request, res: Response) => {
            try {
              const token = req.headers.authorization as string
              const id = req.params.id as string  
              const scorecountry1 = req.body.scorecountry1
              const scorecountry2 = req.body.scorecountry2
              
              const input: IUpdateMatchesInputDTO = {
                token,
                id,
                scorecountry1,
                scorecountry2
              };
        
              
              const response = await this.matchesBusiness.updateMacth(input);
              res.status(201).send(response);
            } catch (error: any) {
              if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message });
              }
        
              res.status(500).send({ message: error.message });
            }
          };


          public getAllMatches = async (req: Request, res: Response) => {
            try {
                const response = await this.matchesBusiness.selectAllMatches()
                
                res.status(200).send({ Jogos: response });
    
            } catch (error: unknown) {
                if (error instanceof BaseError) {
                    return res.status(error.statusCode).send({ message: error.message })
                }
    
                res.status(500).send({ message: "Erro inesperado durante a requisição." })
            }
        }


    }