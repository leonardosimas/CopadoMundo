import { BetsDatabase } from "../database/BetsDatabase";
import { GroupsDatabase } from "../database/GroupsDatabase";
import { MatchesDatabase } from "../database/MatchesDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { Bets, IBetInputDTO, IBetOutputDTO } from "../models/Bets";
import { IdGenerator } from "../services/IdGenerator";
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { STATUS } from "../models/Matches";


export class BetsBusiness {
  constructor(
    private betsDatabase: BetsDatabase,
    private userDatabase: UserDatabase,
    private groupsDatabase: GroupsDatabase,
    private matchesDatabase: MatchesDatabase,
    private idGenerator: IdGenerator
  ) {}

  public Bet = async (input: IBetInputDTO): Promise<IBetOutputDTO | any> => {
    const {
      user_id,
      group_id,
      betgame1_01,
      betgame1_02,
      betgame2_01,
      betgame2_02,
      betgame3_01,
      betgame3_02,
      betgame4_01,
      betgame4_02,
      betgame5_01,
      betgame5_02,
      betgame6_01,
      betgame6_02,
      betgame7_01,
      betgame7_02,
      betgame8_01,
      betgame8_02,
      betgame9_01,
      betgame9_02,
      betgame10_01,
      betgame10_02,
      betgame11_01,
      betgame11_02,
      betgame12_01,
      betgame12_02,
      betgame13_01,
      betgame13_02,
      betgame14_01,
      betgame14_02,
      betgame15_01,
      betgame15_02,
      betgame16_01,
      betgame16_02,
      betgame17_01,
      betgame17_02,
      betgame18_01,
      betgame18_02,
      betgame19_01,
      betgame19_02,
      betgame20_01,
      betgame20_02,
      betgame21_01,
      betgame21_02,
      betgame22_01,
      betgame22_02,
      betgame23_01,
      betgame23_02,
      betgame24_01,
      betgame24_02,
      betgame25_01,
      betgame25_02,
      betgame26_01,
      betgame26_02,
      betgame27_01,
      betgame27_02,
      betgame28_01,
      betgame28_02,
      betgame29_01,
      betgame29_02,
      betgame30_01,
      betgame30_02,
      betgame31_01,
      betgame31_02,
      betgame32_01,
      betgame32_02,
      betgame33_01,
      betgame33_02,
      betgame34_01,
      betgame34_02,
      betgame35_01,
      betgame35_02,
      betgame36_01,
      betgame36_02,
      betgame37_01,
      betgame37_02,
      betgame38_01,
      betgame38_02,
      betgame39_01,
      betgame39_02,
      betgame40_01,
      betgame40_02,
      betgame41_01,
      betgame41_02,
      betgame42_01,
      betgame42_02,
      betgame43_01,
      betgame43_02,
      betgame44_01,
      betgame44_02,
      betgame45_01,
      betgame45_02,
      betgame46_01,
      betgame46_02,
      betgame47_01,
      betgame47_02,
      betgame48_01,
      betgame48_02,
    } = input;

    if (typeof user_id !== "string") {
      throw new RequestError(
        "Parâmetro 'user_id' inválido: deve ser uma string."
      );
    }

    if (typeof group_id !== "string") {
      throw new RequestError(
        "Parâmetro 'group_id' inválido: deve ser uma string."
      );
    }

    //****************************************************************/
    //CHECAGEM DOS VALORES, SÓ PODEM VIR COMO NÚMEROS OU UNDEFINED
    //****************************************************************/

      // if (typeof betgame1_01 !== "number" || undefined || null ) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame1_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame2_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame2_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame3_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame3_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );

      // }

      // if (typeof betgame4_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame4_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame5_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame5_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame6_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame6_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame7_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame7_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame8_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame8_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame9_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame9_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame10_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame10_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame11_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame11_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame12_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame12_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame13_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame13_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame14_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame14_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame15_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame15_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame16_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame16_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame17_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame17_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame18_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame18_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame19_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame19_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame20_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame20_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame21_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame21_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame22_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame22_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame23_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame23_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame24_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame24_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame25_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame25_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame26_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame26_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame27_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame27_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame28_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame28_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame29_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame29_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame30_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame30_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame31_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame31_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame32_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame32_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame33_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame33_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame34_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame34_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame35_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame35_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame36_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame36_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame37_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame37_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame38_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame38_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame39_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame39_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame40_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame40_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame41_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame41_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame42_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame42_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame43_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame43_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame44_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame44_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame45_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame45_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame46_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame46_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame47_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame47_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame48_01 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

      // if (typeof betgame48_02 !== "number" || undefined) {
      //   throw new RequestError(
      //     "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
      //   );
      // }

    // **************************************************//
    

    const isGroupExists = await this.groupsDatabase.findById(group_id);

    if (!isGroupExists) {
      throw new NotFoundError(`Grupo não encontrado.`);
    }

    const isUserExists = await this.userDatabase.findById(user_id);

    if (!user_id) {
      throw new ParamsError("Usuário não informado(a).");
    } else if (!isUserExists) {
      throw new ConflictError(`Usuário não encontrado(a).`);
    }

    const bet = new Bets(
      user_id,
      group_id,
      betgame1_01,
      betgame1_02,
      betgame2_01,
      betgame2_02,
      betgame3_01,
      betgame3_02,
      betgame4_01,
      betgame4_02,
      betgame5_01,
      betgame5_02,
      betgame6_01,
      betgame6_02,
      betgame7_01,
      betgame7_02,
      betgame8_01,
      betgame8_02,
      betgame9_01,
      betgame9_02,
      betgame10_01,
      betgame10_02,
      betgame11_01,
      betgame11_02,
      betgame12_01,
      betgame12_02,
      betgame13_01,
      betgame13_02,
      betgame14_01,
      betgame14_02,
      betgame15_01,
      betgame15_02,
      betgame16_01,
      betgame16_02,
      betgame17_01,
      betgame17_02,
      betgame18_01,
      betgame18_02,
      betgame19_01,
      betgame19_02,
      betgame20_01,
      betgame20_02,
      betgame21_01,
      betgame21_02,
      betgame22_01,
      betgame22_02,
      betgame23_01,
      betgame23_02,
      betgame24_01,
      betgame24_02,
      betgame25_01,
      betgame25_02,
      betgame26_01,
      betgame26_02,
      betgame27_01,
      betgame27_02,
      betgame28_01,
      betgame28_02,
      betgame29_01,
      betgame29_02,
      betgame30_01,
      betgame30_02,
      betgame31_01,
      betgame31_02,
      betgame32_01,
      betgame32_02,
      betgame33_01,
      betgame33_02,
      betgame34_01,
      betgame34_02,
      betgame35_01,
      betgame35_02,
      betgame36_01,
      betgame36_02,
      betgame37_01,
      betgame37_02,
      betgame38_01,
      betgame38_02,
      betgame39_01,
      betgame39_02,
      betgame40_01,
      betgame40_02,
      betgame41_01,
      betgame41_02,
      betgame42_01,
      betgame42_02,
      betgame43_01,
      betgame43_02,
      betgame44_01,
      betgame44_02,
      betgame45_01,
      betgame45_02,
      betgame46_01,
      betgame46_02,
      betgame47_01,
      betgame47_02,
      betgame48_01,
      betgame48_02
    );

    //Checagem importante para verificar se já existe um palpite criado pelo usuário no bolão.
    const isBetExists: any = await this.betsDatabase.findByUserIdAndGroupId(user_id, group_id);

    //Checagem do STATUS para saber se a partida está ENCERRADA e bloquear novas apostas e atualizações.

    const checkStatus: any = await this.matchesDatabase.fetchAllMatches() 
    
    const filterStatus = checkStatus.filter((result: any) => {
      return result.matchstatus === STATUS.CLOSED 
    })

    for (let k = 0 ; k < filterStatus.length ; k++) {
      
      switch (filterStatus[k].id) {
        case '01':
          if (bet.getBet01_1() || bet.getBet01_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '02':
          if (bet.getBet02_1() || bet.getBet02_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '03':
          if (bet.getBet03_1() || bet.getBet03_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '04':
          if (bet.getBet04_1() || bet.getBet04_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '05':
          if (bet.getBet05_1() || bet.getBet05_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '06':
          if (bet.getBet06_1() || bet.getBet06_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '07':
          if (bet.getBet07_1() || bet.getBet07_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '08':
          if (bet.getBet08_1() || bet.getBet08_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '09':
          if (bet.getBet09_1() || bet.getBet09_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '10':
          if (bet.getBet10_1() || bet.getBet10_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '11':
          if (bet.getBet11_1() || bet.getBet11_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '12':
          if (bet.getBet12_1() || bet.getBet12_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '13':
          if (bet.getBet13_1() || bet.getBet13_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '14':
          if (bet.getBet14_1() || bet.getBet14_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '15':
          if (bet.getBet15_1() || bet.getBet15_2() && filterStatus[k].matchstatus === STATUS.CLOSED ) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '16':
          if (bet.getBet16_1() || bet.getBet16_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '17':
          if (bet.getBet17_1() || bet.getBet17_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '18':
          if (bet.getBet18_1() || bet.getBet18_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '19':
          if (bet.getBet19_1() || bet.getBet19_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '20':
          if (bet.getBet20_1() || bet.getBet20_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
          }
        case '21':
          if (bet.getBet21_1() || bet.getBet21_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '22':
          if (bet.getBet22_1() || bet.getBet22_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '23':
          if (bet.getBet23_1() || bet.getBet23_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '24':
          if (bet.getBet24_1() || bet.getBet24_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '25':
          if (bet.getBet25_1() || bet.getBet25_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '26':
          if (bet.getBet26_1() || bet.getBet26_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '27':
          if (bet.getBet27_1() || bet.getBet27_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '28':
          if (bet.getBet28_1() || bet.getBet28_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '29':
          if (bet.getBet29_1() || bet.getBet29_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '30':
          if (bet.getBet30_1() || bet.getBet30_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '31':
          if (bet.getBet31_1() || bet.getBet31_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '32':
          if (bet.getBet32_1() || bet.getBet32_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '33':
          if (bet.getBet33_1() || bet.getBet33_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '34':
          if (bet.getBet34_1() || bet.getBet34_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '35':
          if (bet.getBet35_1() || bet.getBet35_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '36':
          if (bet.getBet36_1() || bet.getBet36_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '37':
          if (bet.getBet37_1() || bet.getBet37_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '38':
          if (bet.getBet38_1() || bet.getBet38_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '39':
          if (bet.getBet39_1() || bet.getBet39_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '40':
          if (bet.getBet40_1() || bet.getBet40_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '41':
          if (bet.getBet41_1() || bet.getBet41_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '42':
          if (bet.getBet42_1() || bet.getBet42_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '43':
          if (bet.getBet43_1() || bet.getBet43_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '44':
          if (bet.getBet44_1() || bet.getBet44_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '45':
          if (bet.getBet45_1() || bet.getBet45_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '46':
          if (bet.getBet46_1() || bet.getBet46_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '47':
          if (bet.getBet47_1() || bet.getBet47_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }
        case '48':
          if (bet.getBet48_1() || bet.getBet48_2() && filterStatus[k].matchstatus === STATUS.CLOSED) {
            throw new ConflictError ("Um dos jogos está encerrado para apostas.")
            break
          }

      }

    }


    //Fazemos a checagem para saber se o usuário já criou o palpite para esse bolão.
    //Caso negativo, instanciamos o palipte, senão fazemos o Update.
    if (isBetExists.length == 0) {
      await this.betsDatabase.placeBet(bet);
      const response: IBetOutputDTO = {
        message: "Seus palpites foram salvos.",
      };

      return response;
    } else {
      await this.betsDatabase.updateBet(bet);
      const response: IBetOutputDTO = {
        message: "Seus palpites foram salvos.",
      };

      return response;
    }
  };


  // ********************************************** //
  // ********   BUSCAR APOSTAS POR GRUPO   ******** //
  // ********************************************** //

  public fetchBetsofGroup = async (id:string) => {

    //Vamos pegar todos os resultados dos jogos na tabela Matches
    const matchesResult: any = await this.matchesDatabase.fetchAllMatches()
    // console.log(matchesResult)
    
    //Agora vamos pegar as apostas por GRUPO
    const result:any = await this.betsDatabase.fetchGroupBets(id)
    // console.log(result)
        if (result.length === 0) {
            throw new NotFoundError ("Grupo não encontrado.");
        }
    
    //******************************************************/
    //IMPLEMENTANDO A LÓGICA DO CÁLCULO DA PONTUAÇÃO DO BOLÃO
    //******************************************************/

    let jogadorpontos: Array<number> = []
    let showResponse: Array<Object> = []

    // console.log(result[0]['betgame' + (1) + '_01']) // Formato correto
    
    //Primeiro FOR vai garantir que passe por todas as apostas do grupo
    for (let i = 0; i < result.length ; i ++) {

      //Neste FOR vou percorrer todos os resultados dos 48 jogos.
      for (let j = 0; j < matchesResult.length ; j++) {
      
        //Checagem para saber quem foi o vencedor do confronto
        if (matchesResult[j].scorecountry1 > matchesResult[j].scorecountry2 && matchesResult[j].scorecountry1 !== null && matchesResult[j].scorecountry2 !== null) {
          
          //Checagem para saber quem se a sua aposta corresponde com o vencedor do confronto
          if (result[i]['betgame' + (j+1) + '_01'] > result[i]['betgame' + (j+1) + '_02']) {
          
            //RESULTADOS VENCEDOR PAÍS 1 *** LÓGICA ESTÁ CORRETA E CHECADA
            console.log(`Vencedor country1: Jogo ${j+1} , ${matchesResult[j].country1}`)
            
            if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
              jogadorpontos.push(15)
            } else if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 !== result[i]['betgame' + (j+1) + '_02']) {
              jogadorpontos.push(10)
            } else if (matchesResult[j].scorecountry1 !== result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
              jogadorpontos.push(8)
            } else if (matchesResult[j].scorecountry1 !== result[i]['betgame' + (j+1) + '_01'] &&  matchesResult[j].scorecountry2 !== result[i]['betgame' + (j+1) + '_02']) {
              
              //Checagem para saber se o jogador acertou o país vitorioso para dar 5 pontos, caso contrário ele não recebe nada.
              if (result[i]['betgame' + (j+1) + '_01'] <= result[i]['betgame' + (j+1) + '_02']) {
                jogadorpontos.push(0)
              } else {
                jogadorpontos.push(5)
              }
            }
          } else {

            //Checagem para dar valor apenas a pontuação completa.
            if (result[i]['betgame' + (j+1) + '_01'] === null   || result[i]['betgame' + (j+1) + '_02'] === null) {
              //Não posso dar valor para um jogo que tenha um campo undefined, não preenchido. 
            } else {
              if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] || matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
                jogadorpontos.push(3)
              }
            }

          }


        } else if (matchesResult[j].scorecountry1 < matchesResult[j].scorecountry2 && matchesResult[j].scorecountry1 !== null && matchesResult[j].scorecountry2 !== null) {
          //RESULTADOS VENCEDOR PAÍS 2 *** LÓGICA ESTÁ CORRETA E CHECADA
          console.log(`Vencedor country2: Jogo ${j+1} , ${matchesResult[j].country2}`)

          //Checagem para saber quem se a sua aposta corresponde com o vencedor do confronto
          if (result[i]['betgame' + (j+1) + '_01'] < result[i]['betgame' + (j+1) + '_02']) {

            if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
              jogadorpontos.push(15)
            } else if (matchesResult[j].scorecountry1 !== result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
              jogadorpontos.push(10)
            } else if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 !== result[i]['betgame' + (j+1) + '_02']) {
              jogadorpontos.push(8)
            } else if (matchesResult[j].scorecountry1 !== result[i]['betgame' + (j+1) + '_01'] &&  matchesResult[j].scorecountry2 !== result[i]['betgame' + (j+1) + '_02']) {
              
              //Checagem para saber se o jogador acertou o país vitorioso para dar 5 pontos, caso contrário ele não recebe nada.
              if (result[i]['betgame' + (j+1) + '_01'] >= result[i]['betgame' + (j+1) + '_02']) {
                jogadorpontos.push(0)
              } else {
                jogadorpontos.push(5)
              }
            }

          } else {

            //Checagem para dar valor apenas a pontuação completa.
            if ((result[i]['betgame' + (j+1) + '_01'] === null || undefined) || (result[i]['betgame' + (j+1) + '_02'] === null || undefined)) {
              //Não posso dar valor para um jogo que tenha um campo undefined, não preenchido.
              // console.log("Este valor não foi preenchido.") 
            } else {
              if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] || matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
                jogadorpontos.push(3)
              }
            }

          }

        } else {
          //RESULTADOS DE EMPATE
          console.log(`Empate jogo: ${j+1}`)

          //Não posso dar valor para um jogo que tenha um campo undefined, não preenchido. 
          if (result[i]['betgame' + (j+1) + '_01'] === null   || result[i]['betgame' + (j+1) + '_02'] === null) {
            //Não posso dar valor para um jogo que tenha um campo undefined, não preenchido.
            // console.log("Este valor não foi preenchido.") 

          } else {

            //Checagem para saber quem se a sua aposta deu empate
            if (result[i]['betgame' + (j+1) + '_01'] === result[i]['betgame' + (j+1) + '_02']) {

              console.log("Resultado REAL foi empate, APOSTA do jogador foi EMPATE !")
                if (matchesResult[j].scorecountry1 !== null && matchesResult[j].scorecountry2 !== null) {
                  if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
                    jogadorpontos.push(15)
                  } else {
                    jogadorpontos.push(5)
                  }
                }
            } else if (matchesResult[j].scorecountry1 !== null && matchesResult[j].scorecountry2 !== null){
                if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] || matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']){
                  jogadorpontos.push(3)
                }
            }
          } 
        }
      }

      console.log("Pontos do jogador:" , jogadorpontos)
      let totaldepontos = jogadorpontos.reduce((total, numero) => total + numero, 0);
      console.log(totaldepontos)
      
      showResponse.push({Grupo: result[i].groupsname, ID: result[i].id ,Nome: result[i].name, Apelido: result[i].nickname, Pontos: totaldepontos})

      jogadorpontos = []
    }
    
    showResponse.sort((a: any, b: any) => (a.Pontos > b.Pontos ? -1 : 1));

    return showResponse

  }
}
