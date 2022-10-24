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

      if (typeof betgame1_01 !== "number" || undefined || null ) {
        throw new RequestError(
          "Parâmetro 'betgame' inválido: deve ser um número ou não informe nenhum valor."
        );
      }

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
    const isBetExists: any = await this.betsDatabase.findByUserIdAndGroupId(
      user_id,
      group_id
    );

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
        if (matchesResult[j].scorecountry1 > matchesResult[j].scorecountry2) {
          
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


        } else if (matchesResult[j].scorecountry1 < matchesResult[j].scorecountry2) {
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
            if (result[i]['betgame' + (j+1) + '_01'] === null   || result[i]['betgame' + (j+1) + '_02'] === null) {
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

                if (matchesResult[j].scorecountry1 === result[i]['betgame' + (j+1) + '_01'] && matchesResult[j].scorecountry2 === result[i]['betgame' + (j+1) + '_02']) {
                  jogadorpontos.push(15)
                } else {
                  jogadorpontos.push(5)
                }

            } else {
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
