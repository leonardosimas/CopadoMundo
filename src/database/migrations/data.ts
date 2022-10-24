// import { IUserDB, USER_ROLES } from "../../models/User"

import { IMatchesDB, MATCH_GROUP } from "../../models/Matches";

// export const users: IUserDB[] = [
    
// ]
let date = new Date()

export const matches: IMatchesDB[] = [
  {
    id: "01",
    country1: "Qatar",
    country2: "Equador",
    dateOfGame: new Date("2022-11-20T16:00:00Z"),
    matchgame : MATCH_GROUP.A
  },
  {
    id: "02",
    country1: "Senegal",
    country2: "Holanda",
    dateOfGame: new Date("2022-11-21T16:00:00Z"),
    matchgame : MATCH_GROUP.A
  },
  {
    id: "03",
    country1: "Inglaterra",
    country2: "Irã",
    dateOfGame: new Date("2022-11-21T13:00:00Z"),
    matchgame : MATCH_GROUP.B
  },
  {
    id: "04",
    country1: "Estados Unidos",
    country2: "País de Gales",
    dateOfGame: new Date("2022-11-21T19:00:00Z"),
    matchgame : MATCH_GROUP.B
  },
  {
    id: "05",
    country1: "França",
    country2: "Austrália",
    dateOfGame: new Date("2022-11-22T19:00:00Z"),
    matchgame : MATCH_GROUP.D
  },
  {
    id: "06",
    country1: "Dinamarca",
    country2: "Tunísia",
    dateOfGame: new Date("2022-11-22T13:00:00Z"),
    matchgame : MATCH_GROUP.D
  },
  {
    id: "07",
    country1: "México",
    country2: "Polônia",
    dateOfGame: new Date("2022-11-22T16:00:00Z"),
    matchgame : MATCH_GROUP.C
  },
  {
    id: "08",
    country1: "Argentina",
    country2: "Arábia Saudita",
    dateOfGame: new Date("2022-11-22T10:00:00Z"),
    matchgame : MATCH_GROUP.C
  },
  {
    id: "09",
    country1: "Bélgica",
    country2: "Canadá",
    dateOfGame: new Date("2022-11-23T19:00:00Z"),
    matchgame : MATCH_GROUP.F
  },
  {
    id: "10",
    country1: "Espanha",
    country2: "Costa Rica",
    dateOfGame: new Date("2022-11-23T16:00:00Z"),
    matchgame : MATCH_GROUP.E
  },
  {
    id: "11",
    country1: "Alemanha",
    country2: "Japão",
    dateOfGame: new Date("2022-11-23T13:00:00Z"),
    matchgame : MATCH_GROUP.E
  },
  {
    id: "12",
    country1: "Marrocos",
    country2: "Croácia",
    dateOfGame: new Date("2022-11-23T10:00:00Z"),
    matchgame : MATCH_GROUP.F
  },
  {
    id: "13",
    country1: "Suiça",
    country2: "Camarões",
    dateOfGame: new Date("2022-11-24T10:00:00Z"),
    matchgame : MATCH_GROUP.G
  },
  {
    id: "14",
    country1: "Uruguai",
    country2: "Coréia do Sul",
    dateOfGame: new Date("2022-11-24T13:00:00Z"),
    matchgame : MATCH_GROUP.H
  },
  {
    id: "15",
    country1: "Portugal",
    country2: "Gana",
    dateOfGame: new Date("2022-11-24T16:00:00Z"),
    matchgame : MATCH_GROUP.H
  },
  {
    id: "16",
    country1: "Brasil",
    country2: "Sérvia",
    dateOfGame: new Date("2022-11-24T19:00:00Z"),
    matchgame : MATCH_GROUP.G
  },
  {
    id: "17",
    country1: "País de Gales",
    country2: "Irã",
    dateOfGame: new Date("2022-11-25T10:00:00Z"),
    matchgame : MATCH_GROUP.B
  },
  {
    id: "18",
    country1: "Qatar",
    country2: "Senegal",
    dateOfGame: new Date("2022-11-25T13:00:00Z"),
    matchgame : MATCH_GROUP.A
  },
  {
    id: "19",
    country1: "Holanda",
    country2: "Equador",
    dateOfGame: new Date("2022-11-25T16:00:00Z"),
    matchgame : MATCH_GROUP.A
  },
  {
    id: "20",
    country1: "Inglaterra",
    country2: "Estados Unidos",
    dateOfGame: new Date("2022-11-25T19:00:00Z"),
    matchgame : MATCH_GROUP.B
  },
  {
    id: "21",
    country1: "Tunísia",
    country2: "Austrália",
    dateOfGame: new Date("2022-11-26T10:00:00Z"),
    matchgame : MATCH_GROUP.D
  },
  {
    id: "22",
    country1: "Polônia",
    country2: "Arábia Saudita",
    dateOfGame: new Date("2022-11-26T13:00:00Z"),
    matchgame : MATCH_GROUP.C
  },
  {
    id: "23",
    country1: "França",
    country2: "Dinamarca",
    dateOfGame: new Date("2022-11-26T16:00:00Z"),
    matchgame : MATCH_GROUP.D
  },
  {
    id: "24",
    country1: "Argentina",
    country2: "México",
    dateOfGame: new Date("2022-11-26T19:00:00Z"),
    matchgame : MATCH_GROUP.C
  },
  {
    id: "25",
    country1: "Japão",
    country2: "Costa Rica",
    dateOfGame: new Date("2022-11-27T10:00:00Z"),
    matchgame : MATCH_GROUP.E
  },
  {
    id: "26",
    country1: "Bélgica",
    country2: "Marrocos",
    dateOfGame: new Date("2022-11-27T13:00:00Z"),
    matchgame : MATCH_GROUP.F
  },
  {
    id: "27",
    country1: "Croácia",
    country2: "Canadá",
    dateOfGame: new Date("2022-11-27T16:00:00Z"),
    matchgame : MATCH_GROUP.F
  },
  {
    id: "28",
    country1: "Espanha",
    country2: "Alemanha",
    dateOfGame: new Date("2022-11-27T19:00:00Z"),
    matchgame : MATCH_GROUP.E
  },
  {
    id: "29",
    country1: "Camarões",
    country2: "Sérvia",
    dateOfGame: new Date("2022-11-28T10:00:00Z"),
    matchgame : MATCH_GROUP.G
  },
  {
    id: "30",
    country1: "Coréia do Sul",
    country2: "Gana",
    dateOfGame: new Date("2022-11-28T13:00:00Z"),
    matchgame : MATCH_GROUP.H
  },
  {
    id: "31",
    country1: "Brasil",
    country2: "Suíca",
    dateOfGame: new Date("2022-11-28T16:00:00Z"),
    matchgame : MATCH_GROUP.G
  },
  {
    id: "32",
    country1: "Portugal",
    country2: "Uruguai",
    dateOfGame: new Date("2022-11-28T19:00:00Z"),
    matchgame : MATCH_GROUP.H
  },
  {
    id: "33",
    country1: "País de Gales",
    country2: "Inglaterra",
    dateOfGame: new Date("2022-11-29T19:00:00Z"),
    matchgame : MATCH_GROUP.B
  },
  {
    id: "34",
    country1: "Irã",
    country2: "Estados Unidos",
    dateOfGame: new Date("2022-11-29T19:00:00Z"),
    matchgame : MATCH_GROUP.B
  },
  {
    id: "35",
    country1: "Equador",
    country2: "Senegal",
    dateOfGame: new Date("2022-11-29T15:00:00Z"),
    matchgame : MATCH_GROUP.A
  },
  {
    id: "36",
    country1: "Holanda",
    country2: "Qatar",
    dateOfGame: new Date("2022-11-29T15:00:00Z"),
    matchgame : MATCH_GROUP.A
  },
  {
    id: "37",
    country1: "Austrália",
    country2: "Dinamarca",
    dateOfGame: new Date("2022-11-30T15:00:00Z"),
    matchgame : MATCH_GROUP.D
  },
  {
    id: "38",
    country1: "Tunísia",
    country2: "França",
    dateOfGame: new Date("2022-11-30T15:00:00Z"),
    matchgame : MATCH_GROUP.D
  },
  {
    id: "39",
    country1: "Polônia",
    country2: "Argentina",
    dateOfGame: new Date("2022-11-30T19:00:00Z"),
    matchgame : MATCH_GROUP.C
  },
  {
    id: "40",
    country1: "Arábia Saudita",
    country2: "México",
    dateOfGame: new Date("2022-11-30T19:00:00Z"),
    matchgame : MATCH_GROUP.C
  },
  {
    id: "41",
    country1: "Croácia",
    country2: "Bélgica",
    dateOfGame: new Date("2022-12-01T15:00:00Z"),
    matchgame : MATCH_GROUP.F
  },
  {
    id: "42",
    country1: "Canadá",
    country2: "Marrocos",
    dateOfGame: new Date("2022-12-01T15:00:00Z"),
    matchgame : MATCH_GROUP.F
  },
  {
    id: "43",
    country1: "Japão",
    country2: "Espanha",
    dateOfGame: new Date("2022-12-01T19:00:00Z"),
    matchgame : MATCH_GROUP.E
  },
  {
    id: "44",
    country1: "Costa Rica",
    country2: "Alemanha",
    dateOfGame: new Date("2022-12-01T19:00:00Z"),
    matchgame : MATCH_GROUP.E
  },
  {
    id: "45",
    country1: "Gana",
    country2: "Uruguai",
    dateOfGame: new Date("2022-12-02T15:00:00Z"),
    matchgame : MATCH_GROUP.H
  },
  {
    id: "46",
    country1: "Coréia do Sul",
    country2: "Portugal",
    dateOfGame: new Date("2022-12-02T15:00:00Z"),
    matchgame : MATCH_GROUP.H
  },
  {
    id: "47",
    country1: "Sérvia",
    country2: "Suíça",
    dateOfGame: new Date("2022-12-02T19:00:00Z"),
    matchgame : MATCH_GROUP.G
  },
  {
    id: "48",
    country1: "Camarões",
    country2: "Brasil",
    dateOfGame: new Date("2022-12-02T19:00:00Z"),
    matchgame : MATCH_GROUP.G
  }
]


