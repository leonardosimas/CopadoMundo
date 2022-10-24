export interface IBetsDB extends IUpdateBetsDB{
  user_id: string;
  group_id: string;
}

export interface IUpdateBetsDB {
  // id: string;
  
  betgame1_01?: number;
  betgame1_02?: number;
  betgame2_01?: number;
  betgame2_02?: number;
  betgame3_01?: number;
  betgame3_02?: number;
  betgame4_01?: number;
  betgame4_02?: number;
  betgame5_01?: number;
  betgame5_02?: number;
  betgame6_01?: number;
  betgame6_02?: number;
  betgame7_01?: number;
  betgame7_02?: number;
  betgame8_01?: number;
  betgame8_02?: number;
  betgame9_01?: number;
  betgame9_02?: number;
  betgame10_01?: number;
  betgame10_02?: number;
  betgame11_01?: number;
  betgame11_02?: number;
  betgame12_01?: number;
  betgame12_02?: number;
  betgame13_01?: number;
  betgame13_02?: number;
  betgame14_01?: number;
  betgame14_02?: number;
  betgame15_01?: number;
  betgame15_02?: number;
  betgame16_01?: number;
  betgame16_02?: number;
  betgame17_01?: number;
  betgame17_02?: number;
  betgame18_01?: number;
  betgame18_02?: number;
  betgame19_01?: number;
  betgame19_02?: number;
  betgame20_01?: number;
  betgame20_02?: number;
  betgame21_01?: number;
  betgame21_02?: number;
  betgame22_01?: number;
  betgame22_02?: number;
  betgame23_01?: number;
  betgame23_02?: number;
  betgame24_01?: number;
  betgame24_02?: number;
  betgame25_01?: number;
  betgame25_02?: number;
  betgame26_01?: number;
  betgame26_02?: number;
  betgame27_01?: number;
  betgame27_02?: number;
  betgame28_01?: number;
  betgame28_02?: number;
  betgame29_01?: number;
  betgame29_02?: number;
  betgame30_01?: number;
  betgame30_02?: number;
  betgame31_01?: number;
  betgame31_02?: number;
  betgame32_01?: number;
  betgame32_02?: number;
  betgame33_01?: number;
  betgame33_02?: number;
  betgame34_01?: number;
  betgame34_02?: number;
  betgame35_01?: number;
  betgame35_02?: number;
  betgame36_01?: number;
  betgame36_02?: number;
  betgame37_01?: number;
  betgame37_02?: number;
  betgame38_01?: number;
  betgame38_02?: number;
  betgame39_01?: number;
  betgame39_02?: number;
  betgame40_01?: number;
  betgame40_02?: number;
  betgame41_01?: number;
  betgame41_02?: number;
  betgame42_01?: number;
  betgame42_02?: number;
  betgame43_01?: number;
  betgame43_02?: number;
  betgame44_01?: number;
  betgame44_02?: number;
  betgame45_01?: number;
  betgame45_02?: number;
  betgame46_01?: number;
  betgame46_02?: number;
  betgame47_01?: number;
  betgame47_02?: number;
  betgame48_01?: number;
  betgame48_02?: number;
}

//***************************************/

export class Bets {
  constructor(
    // private id: string,
    private user_id: string,
    private group_id: string,
    private betgame1_01?: number,
    private betgame1_02?: number,
    private betgame2_01?: number,
    private betgame2_02?: number,
    private betgame3_01?: number,
    private betgame3_02?: number,
    private betgame4_01?: number,
    private betgame4_02?: number,
    private betgame5_01?: number,
    private betgame5_02?: number,
    private betgame6_01?: number,
    private betgame6_02?: number,
    private betgame7_01?: number,
    private betgame7_02?: number,
    private betgame8_01?: number,
    private betgame8_02?: number,
    private betgame9_01?: number,
    private betgame9_02?: number,
    private betgame10_01?: number,
    private betgame10_02?: number,
    private betgame11_01?: number,
    private betgame11_02?: number,
    private betgame12_01?: number,
    private betgame12_02?: number,
    private betgame13_01?: number,
    private betgame13_02?: number,
    private betgame14_01?: number,
    private betgame14_02?: number,
    private betgame15_01?: number,
    private betgame15_02?: number,
    private betgame16_01?: number,
    private betgame16_02?: number,
    private betgame17_01?: number,
    private betgame17_02?: number,
    private betgame18_01?: number,
    private betgame18_02?: number,
    private betgame19_01?: number,
    private betgame19_02?: number,
    private betgame20_01?: number,
    private betgame20_02?: number,
    private betgame21_01?: number,
    private betgame21_02?: number,
    private betgame22_01?: number,
    private betgame22_02?: number,
    private betgame23_01?: number,
    private betgame23_02?: number,
    private betgame24_01?: number,
    private betgame24_02?: number,
    private betgame25_01?: number,
    private betgame25_02?: number,
    private betgame26_01?: number,
    private betgame26_02?: number,
    private betgame27_01?: number,
    private betgame27_02?: number,
    private betgame28_01?: number,
    private betgame28_02?: number,
    private betgame29_01?: number,
    private betgame29_02?: number,
    private betgame30_01?: number,
    private betgame30_02?: number,
    private betgame31_01?: number,
    private betgame31_02?: number,
    private betgame32_01?: number,
    private betgame32_02?: number,
    private betgame33_01?: number,
    private betgame33_02?: number,
    private betgame34_01?: number,
    private betgame34_02?: number,
    private betgame35_01?: number,
    private betgame35_02?: number,
    private betgame36_01?: number,
    private betgame36_02?: number,
    private betgame37_01?: number,
    private betgame37_02?: number,
    private betgame38_01?: number,
    private betgame38_02?: number,
    private betgame39_01?: number,
    private betgame39_02?: number,
    private betgame40_01?: number,
    private betgame40_02?: number,
    private betgame41_01?: number,
    private betgame41_02?: number,
    private betgame42_01?: number,
    private betgame42_02?: number,
    private betgame43_01?: number,
    private betgame43_02?: number,
    private betgame44_01?: number,
    private betgame44_02?: number,
    private betgame45_01?: number,
    private betgame45_02?: number,
    private betgame46_01?: number,
    private betgame46_02?: number,
    private betgame47_01?: number,
    private betgame47_02?: number,
    private betgame48_01?: number,
    private betgame48_02?: number
  ) {}

  //***************************************/

  // public getId = () => {
  //   return this.id;
  // };

  public getUser_id = () => {
    return this.user_id;
  };

  public getGroup_id = () => {
    return this.group_id;
  };

  public getBet01_1 = () => {
    return this.betgame1_01
  }

  public getBet01_2 = () => {
    return this.betgame1_02
  }

  public getBet02_1 = () => {
    return this.betgame2_01
  }

  public getBet02_2 = () => {
    return this.betgame2_02
  }

  public getBet03_1 = () => {
    return this.betgame3_01
  }

  public getBet03_2 = () => {
    return this.betgame3_02
  }

  public getBet04_1 = () => {
    return this.betgame4_01
  }

  public getBet04_2 = () => {
    return this.betgame4_02
  }

  public getBet05_1 = () => {
    return this.betgame5_01
  }

  public getBet05_2 = () => {
    return this.betgame5_02
  }

  public getBet06_1 = () => {
    return this.betgame6_01
  }

  public getBet06_2 = () => {
    return this.betgame6_02
  }

  public getBet07_1 = () => {
    return this.betgame7_01
  }

  public getBet07_2 = () => {
    return this.betgame7_02
  }

  public getBet08_1 = () => {
    return this.betgame8_01
  }

  public getBet08_2 = () => {
    return this.betgame8_02
  }

  public getBet09_1 = () => {
    return this.betgame9_01
  }

  public getBet09_2 = () => {
    return this.betgame9_02
  }

  public getBet10_1 = () => {
    return this.betgame10_01
  }

  public getBet10_2 = () => {
    return this.betgame10_02
  }

  public getBet11_1 = () => {
    return this.betgame11_01
  }
  
  public getBet11_2 = () => {
    return this.betgame11_02
  }

  public getBet12_1 = () => {
    return this.betgame12_01
  }

  public getBet12_2 = () => {
    return this.betgame12_02
  }

  public getBet13_1 = () => {
    return this.betgame13_01
  }

  public getBet13_2 = () => {
    return this.betgame13_02
  }

  public getBet14_1 = () => {
    return this.betgame14_01
  }

  public getBet14_2 = () => {
    return this.betgame14_02
  }

  public getBet15_1 = () => {
    return this.betgame15_01
  }

  public getBet15_2 = () => {
    return this.betgame15_02
  }

  public getBet16_1 = () => {
    return this.betgame16_01
  }

  public getBet16_2 = () => {
    return this.betgame16_02
  }

  public getBet17_1 = () => {
    return this.betgame17_01
  }

  public getBet17_2 = () => {
    return this.betgame17_02
  }

  public getBet18_1 = () => {
    return this.betgame18_01
  }

  public getBet18_2 = () => {
    return this.betgame18_02
  }

  public getBet19_1 = () => {
    return this.betgame19_01
  }

  public getBet19_2 = () => {
    return this.betgame19_02
  }

  public getBet20_1 = () => {
    return this.betgame20_01
  }

  public getBet20_2 = () => {
    return this.betgame20_02
  }

  public getBet21_1 = () => {
    return this.betgame21_01
  }

  public getBet21_2 = () => {
    return this.betgame21_02
  }

  public getBet22_1 = () => {
    return this.betgame22_01
  }

  public getBet22_2 = () => {
    return this.betgame22_02
  }

  public getBet23_1 = () => {
    return this.betgame23_01
  }

  public getBet23_2 = () => {
    return this.betgame23_02
  }

  public getBet24_1 = () => {
    return this.betgame24_01
  }

  public getBet24_2 = () => {
    return this.betgame24_02
  }

  public getBet25_1 = () => {
    return this.betgame25_01
  }

  public getBet25_2 = () => {
    return this.betgame25_02
  }

  public getBet26_1 = () => {
    return this.betgame26_01
  }

  public getBet26_2 = () => {
    return this.betgame26_02
  }

  public getBet27_1 = () => {
    return this.betgame27_01
  }

  public getBet27_2 = () => {
    return this.betgame27_02
  }

  public getBet28_1 = () => {
    return this.betgame28_01
  }

  public getBet28_2 = () => {
    return this.betgame28_02
  }

  public getBet29_1 = () => {
    return this.betgame29_01
  }

  public getBet29_2 = () => {
    return this.betgame29_02
  }

  public getBet30_1 = () => {
    return this.betgame30_01
  }

  public getBet30_2 = () => {
    return this.betgame30_02
  }

  public getBet31_1 = () => {
    return this.betgame31_01
  }

  public getBet31_2 = () => {
    return this.betgame31_02
  }

  public getBet32_1 = () => {
    return this.betgame32_01
  }

  public getBet32_2 = () => {
    return this.betgame32_02
  }

  public getBet33_1 = () => {
    return this.betgame33_01
  }

  public getBet33_2 = () => {
    return this.betgame33_02
  }

  public getBet34_1 = () => {
    return this.betgame34_01
  }

  public getBet34_2 = () => {
    return this.betgame34_02
  }

  public getBet35_1 = () => {
    return this.betgame35_01
  }

  public getBet35_2 = () => {
    return this.betgame35_02
  }

  public getBet36_1 = () => {
    return this.betgame36_01
  }

  public getBet36_2 = () => {
    return this.betgame36_02
  }

  public getBet37_1 = () => {
    return this.betgame37_01
  }

  public getBet37_2 = () => {
    return this.betgame37_02
  }

  public getBet38_1 = () => {
    return this.betgame38_01
  }

  public getBet38_2 = () => {
    return this.betgame38_02
  }

  public getBet39_1 = () => {
    return this.betgame39_01
  }

  public getBet39_2 = () => {
    return this.betgame39_02
  }

  public getBet40_1 = () => {
    return this.betgame40_01
  }

  public getBet40_2 = () => {
    return this.betgame40_02
  }

  public getBet41_1 = () => {
    return this.betgame41_01
  }

  public getBet41_2 = () => {
    return this.betgame41_02
  }

  public getBet42_1 = () => {
    return this.betgame42_01
  }

  public getBet42_2 = () => {
    return this.betgame42_02
  }

  public getBet43_1 = () => {
    return this.betgame43_01
  }

  public getBet43_2 = () => {
    return this.betgame43_02
  }

  public getBet44_1 = () => {
    return this.betgame44_01
  }

  public getBet44_2 = () => {
    return this.betgame44_02
  }

  public getBet45_1 = () => {
    return this.betgame45_01
  }

  public getBet45_2 = () => {
    return this.betgame45_02
  }

  public getBet46_1 = () => {
    return this.betgame46_01
  }

  public getBet46_2 = () => {
    return this.betgame46_02
  }

  public getBet47_1 = () => {
    return this.betgame47_01
  }

  public getBet47_2 = () => {
    return this.betgame47_02
  }

  public getBet48_1 = () => {
    return this.betgame48_01
  }

  public getBet48_2 = () => {
    return this.betgame48_02
  }
//***************************************/
  
  // public setId = (newId: string) => {
  //   this.id = newId;
  // };

  public setUser_id = (newUser_id: string) => {
    this.user_id = newUser_id;
  };

  public setGroup_id = (newGroup_id: string) => {
    this.group_id = newGroup_id;
  };
}

//***************************************/

export interface IBetInputDTO {
  user_id: string;
  group_id: string;
  betgame1_01?: number;
  betgame1_02?: number;
  betgame2_01?: number;
  betgame2_02?: number;
  betgame3_01?: number;
  betgame3_02?: number;
  betgame4_01?: number;
  betgame4_02?: number;
  betgame5_01?: number;
  betgame5_02?: number;
  betgame6_01?: number;
  betgame6_02?: number;
  betgame7_01?: number;
  betgame7_02?: number;
  betgame8_01?: number;
  betgame8_02?: number;
  betgame9_01?: number;
  betgame9_02?: number;
  betgame10_01?: number;
  betgame10_02?: number;
  betgame11_01?: number;
  betgame11_02?: number;
  betgame12_01?: number;
  betgame12_02?: number;
  betgame13_01?: number;
  betgame13_02?: number;
  betgame14_01?: number;
  betgame14_02?: number;
  betgame15_01?: number;
  betgame15_02?: number;
  betgame16_01?: number;
  betgame16_02?: number;
  betgame17_01?: number;
  betgame17_02?: number;
  betgame18_01?: number;
  betgame18_02?: number;
  betgame19_01?: number;
  betgame19_02?: number;
  betgame20_01?: number;
  betgame20_02?: number;
  betgame21_01?: number;
  betgame21_02?: number;
  betgame22_01?: number;
  betgame22_02?: number;
  betgame23_01?: number;
  betgame23_02?: number;
  betgame24_01?: number;
  betgame24_02?: number;
  betgame25_01?: number;
  betgame25_02?: number;
  betgame26_01?: number;
  betgame26_02?: number;
  betgame27_01?: number;
  betgame27_02?: number;
  betgame28_01?: number;
  betgame28_02?: number;
  betgame29_01?: number;
  betgame29_02?: number;
  betgame30_01?: number;
  betgame30_02?: number;
  betgame31_01?: number;
  betgame31_02?: number;
  betgame32_01?: number;
  betgame32_02?: number;
  betgame33_01?: number;
  betgame33_02?: number;
  betgame34_01?: number;
  betgame34_02?: number;
  betgame35_01?: number;
  betgame35_02?: number;
  betgame36_01?: number;
  betgame36_02?: number;
  betgame37_01?: number;
  betgame37_02?: number;
  betgame38_01?: number;
  betgame38_02?: number;
  betgame39_01?: number;
  betgame39_02?: number;
  betgame40_01?: number;
  betgame40_02?: number;
  betgame41_01?: number;
  betgame41_02?: number;
  betgame42_01?: number;
  betgame42_02?: number;
  betgame43_01?: number;
  betgame43_02?: number;
  betgame44_01?: number;
  betgame44_02?: number;
  betgame45_01?: number;
  betgame45_02?: number;
  betgame46_01?: number;
  betgame46_02?: number;
  betgame47_01?: number;
  betgame47_02?: number;
  betgame48_01?: number;
  betgame48_02?: number;
}

//***************************************/

export interface IBetOutputDTO {
  message: string;
}
