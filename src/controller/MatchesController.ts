import { Request, Response } from "express";
import { MatchesBusiness } from "../business/MatchesBusiness";
import { BaseError } from "../errors/BaseError";
import { IUpdateMatchesInputDTO, IUpdateMatchStatusInputDTO, STATUS } from "../models/Matches";


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
              const matchstatus = req.body.matchstatus as STATUS  
              const scorecountry1 = req.body.scorecountry1
              const scorecountry2 = req.body.scorecountry2
              
              const input: IUpdateMatchesInputDTO = {
                token,
                id,
                matchstatus,
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

        //******************************************************************/
        //***********   MÉTODO - ATUALIZAR STATUS DO JOGO   ****************/
        //******************************************************************/

        public updateStatus = async (req: Request, res: Response) => {
          try {
            const token = req.headers.authorization as string
            const id = req.params.id as string  
            const matchstatus = req.body.matchstatus as STATUS
            
            const input: IUpdateMatchStatusInputDTO = {
              token,
              id,
              matchstatus
            };
      
            
            const response = await this.matchesBusiness.updateStatus(input);
            res.status(201).send(response);
          } catch (error: any) {
            if (error instanceof BaseError) {
              return res.status(error.statusCode).send({ message: error.message });
            }
      
            res.status(500).send({ message: error.message });
          }
        };
        

        //******************************************************************/
        //****************   MÉTODO - BUSCAR OS JOGOS   ********************/
        //******************************************************************/

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