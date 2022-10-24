export enum MATCH_GROUP {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H",
}

export interface IMatchesDB {
  id: string;
  country1: string;
  country2: string;
  dateOfGame: Date;
  matchgame: MATCH_GROUP;
}

export interface IUpdateMatchesDB {
  id: string,
  scorecountry1?: number;
  scorecountry2?: number;
}

export class Matches {
  constructor(
    private id: string,
    private country1: string,
    private country2: string,
    private dateOfGame: Date,
    private matchgame: MATCH_GROUP,
    // private scorecountry1?: number,
    // private scorecountry2?: number
  ) {}

  public getId = () => {
    return this.id;
  };

  public getCountry1 = () => {
    return this.country1;
  };

  public getCountry2 = () => {
    return this.country2;
  };

  public getDateOfGame = () => {
    return this.dateOfGame;
  };

  public getMatchgame = () => {
    return this.matchgame;
  };

  // public getScoreCountry1 = () => {
  //   return this.scorecountry1;
  // };

  // public getScoreCountry2 = () => {
  //   return this.scorecountry2;
  // };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setCountry1 = (newCountry1: string) => {
    this.country1 = newCountry1;
  };

  public setCountry2 = (newCountry2: string) => {
    this.country2 = newCountry2;
  };

  public setDateOfGame = (newDateOfGame: Date) => {
    this.dateOfGame = newDateOfGame;
  };

  public setMatchgame = (newMatchgame: MATCH_GROUP) => {
    this.matchgame = newMatchgame;
  };

  // public setScoreCountry1 = (newScoreCountry1: number) => {
  //   this.scorecountry1 = newScoreCountry1;
  // };

  // public setScoreCountry2 = (newScoreCountry2: number) => {
  //   this.scorecountry2 = newScoreCountry2;
  // };
}

export class UpdateMatches {
  constructor(
    private id: string,
    private scorecountry1?: number,
    private scorecountry2?: number
  ) {}
  
  public getId = () => {
    return this.id;
  };

  public getScoreCountry1 = () => {
    return this.scorecountry1;
  };

  public getScoreCountry2 = () => {
    return this.scorecountry2;
  };

  public setId = (newId: string) => {
    this.id = newId;
  };

  public setScoreCountry1 = (newScoreCountry1: number) => {
    this.scorecountry1 = newScoreCountry1;
  };

  public setScoreCountry2 = (newScoreCountry2: number) => {
    this.scorecountry2 = newScoreCountry2;
  };
}



export interface IUpdateMatchesInputDTO {
  token: string,
  id: string,  
  scorecountry1: string;
  scorecountry2: string;
}

export interface IUpdateMatchesOutputDTO {
  message: string;
}
