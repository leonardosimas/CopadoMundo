
import { Bets, IBetsDB, IUpdateBetsDB } from "../models/Bets"
import { BaseDatabase } from "./BaseDatabase"
import { GroupsDatabase } from "./GroupsDatabase"
import { UserDatabase } from "./UserDatabase"

export class BetsDatabase extends BaseDatabase {
    public static TABLE_BETS = "Projeto_Bolao_Bets"

    
    public toUpdateBetDBModel = (bet: Bets): IUpdateBetsDB => {
        const updateBetDB: IUpdateBetsDB = {
            // id: bet.getId(),
            user_id: bet.getUser_id(),
            // group_id: bet.getGroup_id(),
            betgame1_01: bet.getBet01_1(),
            betgame1_02: bet.getBet01_2(),
            betgame2_01: bet.getBet02_1(),
            betgame2_02: bet.getBet02_2(),
            betgame3_01: bet.getBet03_1(),
            betgame3_02: bet.getBet03_2(),
            betgame4_01: bet.getBet04_1(),
            betgame4_02: bet.getBet04_2(),
            betgame5_01: bet.getBet05_1(),
            betgame5_02: bet.getBet05_2(),
            betgame6_01: bet.getBet06_1(),
            betgame6_02: bet.getBet06_2(),
            betgame7_01: bet.getBet07_1(),
            betgame7_02: bet.getBet07_2(),
            betgame8_01: bet.getBet08_1(),
            betgame8_02: bet.getBet08_2(),
            betgame9_01: bet.getBet09_1(),
            betgame9_02: bet.getBet09_2(),
            betgame10_01: bet.getBet10_1(),
            betgame10_02: bet.getBet10_2(),
            betgame11_01: bet.getBet11_1(),
            betgame11_02: bet.getBet11_2(),
            betgame12_01: bet.getBet12_1(),
            betgame12_02: bet.getBet12_2(),
            betgame13_01: bet.getBet13_1(),
            betgame13_02: bet.getBet13_2(),
            betgame14_01: bet.getBet14_1(),
            betgame14_02: bet.getBet14_2(),
            betgame15_01: bet.getBet15_1(),
            betgame15_02: bet.getBet15_2(),
            betgame16_01: bet.getBet16_1(),
            betgame16_02: bet.getBet16_2(),
            betgame17_01: bet.getBet17_1(),
            betgame17_02: bet.getBet17_2(),
            betgame18_01: bet.getBet18_1(),
            betgame18_02: bet.getBet18_2(),
            betgame19_01: bet.getBet19_1(),
            betgame19_02: bet.getBet19_2(),
            betgame20_01: bet.getBet20_1(),
            betgame20_02: bet.getBet20_2(),
            betgame21_01: bet.getBet21_1(),
            betgame21_02: bet.getBet21_2(),
            betgame22_01: bet.getBet22_1(),
            betgame22_02: bet.getBet22_2(),
            betgame23_01: bet.getBet23_1(),
            betgame23_02: bet.getBet23_2(),
            betgame24_01: bet.getBet24_1(),
            betgame24_02: bet.getBet24_2(),
            betgame25_01: bet.getBet25_1(),
            betgame25_02: bet.getBet25_2(),
            betgame26_01: bet.getBet26_1(),
            betgame26_02: bet.getBet26_2(),
            betgame27_01: bet.getBet27_1(),
            betgame27_02: bet.getBet27_2(),
            betgame28_01: bet.getBet28_1(),
            betgame28_02: bet.getBet28_2(),
            betgame29_01: bet.getBet29_1(),
            betgame29_02: bet.getBet29_2(),
            betgame30_01: bet.getBet30_1(),
            betgame30_02: bet.getBet30_2(),
            betgame31_01: bet.getBet31_1(),
            betgame31_02: bet.getBet31_2(),
            betgame32_01: bet.getBet32_1(),
            betgame32_02: bet.getBet32_2(),
            betgame33_01: bet.getBet33_1(),
            betgame33_02: bet.getBet33_2(),
            betgame34_01: bet.getBet34_1(),
            betgame34_02: bet.getBet34_2(),
            betgame35_01: bet.getBet35_1(),
            betgame35_02: bet.getBet35_2(),
            betgame36_01: bet.getBet36_1(),
            betgame36_02: bet.getBet36_2(),
            betgame37_01: bet.getBet37_1(),
            betgame37_02: bet.getBet37_2(),
            betgame38_01: bet.getBet38_1(),
            betgame38_02: bet.getBet38_2(),
            betgame39_01: bet.getBet39_1(),
            betgame39_02: bet.getBet39_2(),
            betgame40_01: bet.getBet40_1(),
            betgame40_02: bet.getBet40_2(),
            betgame41_01: bet.getBet41_1(),
            betgame41_02: bet.getBet41_2(),
            betgame42_01: bet.getBet42_1(),
            betgame42_02: bet.getBet42_2(),
            betgame43_01: bet.getBet43_1(),
            betgame43_02: bet.getBet43_2(),
            betgame44_01: bet.getBet44_1(),
            betgame44_02: bet.getBet44_2(),
            betgame45_01: bet.getBet45_1(),
            betgame45_02: bet.getBet45_2(),
            betgame46_01: bet.getBet46_1(),
            betgame46_02: bet.getBet46_2(),
            betgame47_01: bet.getBet47_1(),
            betgame47_02: bet.getBet47_2(),
            betgame48_01: bet.getBet48_1(),
            betgame48_02: bet.getBet48_2(),

        }

        return updateBetDB
    }

    public toBetDBModel = (bet: Bets): IBetsDB => {
        const betDB: IBetsDB = {
            user_id: bet.getUser_id(),
            group_id: bet.getGroup_id(),
            betgame1_01: bet.getBet01_1(),
            betgame1_02: bet.getBet01_2(),
            betgame2_01: bet.getBet02_1(),
            betgame2_02: bet.getBet02_2(),
            betgame3_01: bet.getBet03_1(),
            betgame3_02: bet.getBet03_2(),
            betgame4_01: bet.getBet04_1(),
            betgame4_02: bet.getBet04_2(),
            betgame5_01: bet.getBet05_1(),
            betgame5_02: bet.getBet05_2(),
            betgame6_01: bet.getBet06_1(),
            betgame6_02: bet.getBet06_2(),
            betgame7_01: bet.getBet07_1(),
            betgame7_02: bet.getBet07_2(),
            betgame8_01: bet.getBet08_1(),
            betgame8_02: bet.getBet08_2(),
            betgame9_01: bet.getBet09_1(),
            betgame9_02: bet.getBet09_2(),
            betgame10_01: bet.getBet10_1(),
            betgame10_02: bet.getBet10_2(),
            betgame11_01: bet.getBet11_1(),
            betgame11_02: bet.getBet11_2(),
            betgame12_01: bet.getBet12_1(),
            betgame12_02: bet.getBet12_2(),
            betgame13_01: bet.getBet13_1(),
            betgame13_02: bet.getBet13_2(),
            betgame14_01: bet.getBet14_1(),
            betgame14_02: bet.getBet14_2(),
            betgame15_01: bet.getBet15_1(),
            betgame15_02: bet.getBet15_2(),
            betgame16_01: bet.getBet16_1(),
            betgame16_02: bet.getBet16_2(),
            betgame17_01: bet.getBet17_1(),
            betgame17_02: bet.getBet17_2(),
            betgame18_01: bet.getBet18_1(),
            betgame18_02: bet.getBet18_2(),
            betgame19_01: bet.getBet19_1(),
            betgame19_02: bet.getBet19_2(),
            betgame20_01: bet.getBet20_1(),
            betgame20_02: bet.getBet20_2(),
            betgame21_01: bet.getBet21_1(),
            betgame21_02: bet.getBet21_2(),
            betgame22_01: bet.getBet22_1(),
            betgame22_02: bet.getBet22_2(),
            betgame23_01: bet.getBet23_1(),
            betgame23_02: bet.getBet23_2(),
            betgame24_01: bet.getBet24_1(),
            betgame24_02: bet.getBet24_2(),
            betgame25_01: bet.getBet25_1(),
            betgame25_02: bet.getBet25_2(),
            betgame26_01: bet.getBet26_1(),
            betgame26_02: bet.getBet26_2(),
            betgame27_01: bet.getBet27_1(),
            betgame27_02: bet.getBet27_2(),
            betgame28_01: bet.getBet28_1(),
            betgame28_02: bet.getBet28_2(),
            betgame29_01: bet.getBet29_1(),
            betgame29_02: bet.getBet29_2(),
            betgame30_01: bet.getBet30_1(),
            betgame30_02: bet.getBet30_2(),
            betgame31_01: bet.getBet31_1(),
            betgame31_02: bet.getBet31_2(),
            betgame32_01: bet.getBet32_1(),
            betgame32_02: bet.getBet32_2(),
            betgame33_01: bet.getBet33_1(),
            betgame33_02: bet.getBet33_2(),
            betgame34_01: bet.getBet34_1(),
            betgame34_02: bet.getBet34_2(),
            betgame35_01: bet.getBet35_1(),
            betgame35_02: bet.getBet35_2(),
            betgame36_01: bet.getBet36_1(),
            betgame36_02: bet.getBet36_2(),
            betgame37_01: bet.getBet37_1(),
            betgame37_02: bet.getBet37_2(),
            betgame38_01: bet.getBet38_1(),
            betgame38_02: bet.getBet38_2(),
            betgame39_01: bet.getBet39_1(),
            betgame39_02: bet.getBet39_2(),
            betgame40_01: bet.getBet40_1(),
            betgame40_02: bet.getBet40_2(),
            betgame41_01: bet.getBet41_1(),
            betgame41_02: bet.getBet41_2(),
            betgame42_01: bet.getBet42_1(),
            betgame42_02: bet.getBet42_2(),
            betgame43_01: bet.getBet43_1(),
            betgame43_02: bet.getBet43_2(),
            betgame44_01: bet.getBet44_1(),
            betgame44_02: bet.getBet44_2(),
            betgame45_01: bet.getBet45_1(),
            betgame45_02: bet.getBet45_2(),
            betgame46_01: bet.getBet46_1(),
            betgame46_02: bet.getBet46_2(),
            betgame47_01: bet.getBet47_1(),
            betgame47_02: bet.getBet47_2(),
            betgame48_01: bet.getBet48_1(),
            betgame48_02: bet.getBet48_2(),

        }

        return betDB
    }

    public findByUserIdAndGroupId = async (user_id: string , group_id: string): Promise<IBetsDB | undefined> => {
        const result: IBetsDB[] = await this.getConnection().raw(`
        SELECT * FROM ${BetsDatabase.TABLE_BETS} WHERE user_id = '${user_id}' AND group_id = '${group_id}'
        `);

        return result[0]
    }

    public findById = async (id: string): Promise<IBetsDB | undefined> => {
        const result: IBetsDB[] = await this.getConnection()(BetsDatabase.TABLE_BETS)
            .select()
            .where({ id })

        return result[0]
    }
    
    public placeBet = async (bet: Bets): Promise<void> => {
        const betDB = this.toBetDBModel(bet)

        await this.getConnection()(BetsDatabase.TABLE_BETS)
            .insert(betDB)
            
    }

    public updateBet = async (updateBet: Bets): Promise<void> => {
        const updateBetDB = this.toUpdateBetDBModel(updateBet)

        await this.getConnection()(BetsDatabase.TABLE_BETS)
            .update(updateBetDB)
            .where({user_id : updateBet.getUser_id()})
            
    }
    public fetchGroupBets = async (id: string): Promise<IBetsDB | undefined> => {
        const result: IBetsDB[] = await this.getConnection().raw(`
        SELECT * FROM ${BetsDatabase.TABLE_BETS}
        INNER JOIN ${GroupsDatabase.TABLE_GROUPS} ON ${GroupsDatabase.TABLE_GROUPS}.id = ${BetsDatabase.TABLE_BETS}.group_id
        INNER JOIN ${UserDatabase.TABLE_USERS} ON ${UserDatabase.TABLE_USERS}.id = ${BetsDatabase.TABLE_BETS}.user_id
        WHERE ${BetsDatabase.TABLE_BETS}.group_id = '${id}';


        `);

        return result[0]
    }

    public deleteBets = async (delBets: string): Promise<void> => {
        console.log(delBets)
        await this.getConnection()(BetsDatabase.TABLE_BETS)
        .delete()
        .where({user_id: delBets})
      }

    

}