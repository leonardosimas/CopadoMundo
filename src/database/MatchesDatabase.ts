import { IMatchesDB, IUpdateMatchesDB, Matches, UpdateMatches } from "../models/Matches"
import { BaseDatabase } from "./BaseDatabase"

export class MatchesDatabase extends BaseDatabase {
    public static TABLE_MATCHES = "Projeto_Bolao_Matches"

    public toMatchesDBModel = (matches: Matches): IMatchesDB => {
        const matchesDB: IMatchesDB = {
            id: matches.getId(),
            country1: matches.getCountry1(),
            country2: matches.getCountry2(),
            dateOfGame: matches.getDateOfGame(),
            matchgame: matches.getMatchgame(),
            matchstatus: matches.getMatchstatus()
        }

        return matchesDB
    }

    public toUpdateMatchesDBModel = (matches: UpdateMatches): IUpdateMatchesDB => {
        const matchesDB: IUpdateMatchesDB = {
            id: matches.getId(),
            matchstatus: matches.getMatchstatus(),
            scorecountry1: matches.getScoreCountry1(),
            scorecountry2: matches.getScoreCountry2()
        }

        return matchesDB
    }

    public toUpdateMatchStatusDBModel = (status: UpdateMatches): IUpdateMatchesDB => {
        const statusDB: IUpdateMatchesDB = {
            id: status.getId(),
            matchstatus:status.getMatchstatus()
        }

        return statusDB
    }

    public createMatches = async (matches: Matches): Promise<void> => {
        const matchesDB = this.toMatchesDBModel(matches)

        await this.getConnection()(MatchesDatabase.TABLE_MATCHES)
            .insert(matchesDB)
    }

    public fetchAllMatches = async (): Promise<IMatchesDB | undefined> => {
        const result: IMatchesDB[] = await this.getConnection().raw(`
            SELECT * FROM ${MatchesDatabase.TABLE_MATCHES}
            ORDER BY id
        `);
    
        return result[0];
      };

    public findById = async (id: string): Promise<IMatchesDB | undefined> => {
        const result: IMatchesDB[] = await this.getConnection()(MatchesDatabase.TABLE_MATCHES)
            .select()
            .where({ id })

        return result[0]
    }

    public updateMatches = async (updateMatches: UpdateMatches): Promise<void> => {
        const updateMatchDB = this.toUpdateMatchesDBModel(updateMatches)
        await this.getConnection()
            .update(updateMatchDB)
            .into(MatchesDatabase.TABLE_MATCHES)
            .where({id : updateMatchDB.id})
            
    }

    public updateStatus = async (updateStatus: UpdateMatches): Promise<void> => {
        
        const updateStatusDB = this.toUpdateMatchStatusDBModel(updateStatus)
        await this.getConnection()
            .update(updateStatusDB)
            .into(MatchesDatabase.TABLE_MATCHES)
            .where({id : updateStatusDB.id})
            
    }
}