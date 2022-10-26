import { BaseDatabase } from "../BaseDatabase"
import { MatchesDatabase } from "../MatchesDatabase"
import { matches } from "./data"

export class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error:any) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            this.getConnection().destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
       
        await this.getConnection().raw(`
        
        DROP TABLE IF EXISTS ${MatchesDatabase.TABLE_MATCHES};
        
        `)

        await this.getConnection().raw(`
       
        CREATE TABLE IF NOT EXISTS ${MatchesDatabase.TABLE_MATCHES}(
            id VARCHAR(255) NOT NULL PRIMARY KEY,
            country1 VARCHAR(255) NOT NULL,
            country2 VARCHAR(255) NOT NULL,
            scorecountry1 INT(2),
            scorecountry2 INT(2),
            dateOfGame DATE NOT NULL,
            matchgame ENUM('A' , 'B' , 'C', 'D' , 'E' , 'F', 'G', 'H') NOT NULL,
            matchstatus ENUM('OPEN', 'CLOSED') DEFAULT 'OPEN'
        );
    `)
    }

    insertData = async () => {
        await this.getConnection()(MatchesDatabase.TABLE_MATCHES)
            .insert(matches)

    }
}

// const migrations = new Migrations()
// migrations.execute()