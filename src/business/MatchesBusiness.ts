import { MatchesDatabase } from "../database/MatchesDatabase";
import { Migrations } from "../database/migrations/Migrations";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import {
  IUpdateMatchesDB,
  IUpdateMatchesInputDTO,
  IUpdateMatchesOutputDTO,
  IUpdateMatchStatusInputDTO,
  STATUS,
  UpdateMatches,
} from "../models/Matches";
import { USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";


export class MatchesBusiness {
  constructor(
    private matchesDatabase: MatchesDatabase,
    private migrations: Migrations,
    private authenticator: Authenticator
  ) {}

  //*****   POPULATE   *****
  public populate = async () => {
    const migrations = new Migrations();
    migrations.execute();
  };

  //****** UPDATE MATCHES ********/
  public updateMacth = async (
    input: IUpdateMatchesInputDTO
  ): Promise<IUpdateMatchesOutputDTO | any> => {
    const { token, id, scorecountry1, scorecountry2 } = input;
    let matchstatus = input.matchstatus as STATUS

    if (!token) {
      throw new UnauthorizedError("Token inválido ou faltando");
    }

    const payload: ITokenPayload | any =
      this.authenticator.getTokenPayload(token);

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError(
        "Somente ADMINS podem atualizar os placares."
      );
    }

    if (!id) {
      throw new ParamsError("Parâmetro 'id' inválido.");
    } else if (id == ":id") {
      throw new ParamsError("Parâmetro 'id' deve ser informado.");
    }

    //****************************************************************/
    //CHECAGEM DOS VALORES, SÓ PODEM VIR COMO NÚMEROS OU UNDEFINED
    //****************************************************************/

    if (typeof scorecountry1 !== "number" || undefined) {
      throw new RequestError(
        "Parâmetro 'scorecountry1' inválido: deve ser um número ou não informe nenhum valor."
      );
    }

    if (typeof scorecountry2 !== "number" || undefined) {
      throw new RequestError(
        "Parâmetro 'scorecountry2' inválido: deve ser um número ou não informe nenhum valor."
      );
    }

    console.log(matchstatus)

    if (!matchstatus) {
      matchstatus = STATUS.CLOSED
    } else if (!Object.values(STATUS)?.includes(matchstatus)) {
      throw new ParamsError ("O STATUS da partida só pode ser 'OPEN' ou 'CLOSED'.")
    }

    const checkStatus: any = await this.matchesDatabase.findById(id)
    
    if (checkStatus.matchstatus === STATUS.CLOSED) {
      throw new ConflictError ("Esse jogo já foi fechado, para você fazer uma alteração deverá reabri-lo.")
    }

    const updateMatch = new UpdateMatches(id, matchstatus, scorecountry1, scorecountry2);

    await this.matchesDatabase.updateMatches(updateMatch);
    const response: IUpdateMatchesOutputDTO = {
      message: "O placar do jogo foi atualizado.",
    };

    return response;
  };

  //****** UPDATE STATUS ********/
  public updateStatus = async (
    input: IUpdateMatchStatusInputDTO
  ): Promise<IUpdateMatchesOutputDTO | any> => {
    const { token, id } = input;
    let matchstatus = input.matchstatus as STATUS

    if (!token) {
      throw new UnauthorizedError("Token inválido ou faltando");
    }

    const payload: ITokenPayload | any =
      this.authenticator.getTokenPayload(token);

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new UnauthorizedError(
        "Somente ADMINS podem atualizar o STATUS do jogo."
      );
    }

    if (!id) {
      throw new ParamsError("Parâmetro 'id' inválido.");
    } else if (id == ":id") {
      throw new ParamsError("Parâmetro 'id' deve ser informado.");
    }

    if (!matchstatus) {
      matchstatus = STATUS.CLOSED
    }

    if (!Object.values(STATUS)?.includes(matchstatus)) {
      throw new ParamsError ("O STATUS da partida só pode ser 'OPEN' ou 'CLOSED'.")
    }
  
    const updateStatus = new UpdateMatches(id, matchstatus);

    await this.matchesDatabase.updateStatus(updateStatus);
    const response: IUpdateMatchesOutputDTO = {
      message: `O status do jogo foi alterado para ${matchstatus}.`,
    };

    return response;
  };

  //********************************************/
  //*****   MÉTODO BUSCAR TODOS OS JOGOS   *****/
  //********************************************/

  public selectAllMatches = async () => {
    const result = await this.matchesDatabase.fetchAllMatches();

    return result;
  };
}
