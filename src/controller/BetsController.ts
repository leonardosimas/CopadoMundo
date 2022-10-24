import { Request, Response } from "express";
import { BetsBusiness } from "../business/BetsBusiness";
import { BaseError } from "../errors/BaseError";
import { IBetInputDTO, IBetsDB } from "../models/Bets";


export class BetsController {
  constructor(private betsBusiness: BetsBusiness) {}

  public Bet = async (req: Request, res: Response) => {
    try {
      const group_id = req.params.id as string  
      
      const input: IBetInputDTO = {
        user_id: req.body.user_id,
        group_id,
        betgame1_01: req.body.betgame1_01,
        betgame1_02: req.body.betgame1_02,
        betgame2_01: req.body.betgame2_01,
        betgame2_02: req.body.betgame2_02,
        betgame3_01: req.body.betgame3_01,
        betgame3_02: req.body.betgame3_02,
        betgame4_01: req.body.betgame4_01,
        betgame4_02: req.body.betgame4_02,
        betgame5_01: req.body.betgame5_01,
        betgame5_02: req.body.betgame5_02,
        betgame6_01: req.body.betgame6_01,
        betgame6_02: req.body.betgame6_02,
        betgame7_01: req.body.betgame7_01,
        betgame7_02: req.body.betgame7_02,
        betgame8_01: req.body.betgame8_01,
        betgame8_02: req.body.betgame8_02,
        betgame9_01: req.body.betgame9_01,
        betgame9_02: req.body.betgame9_02,
        betgame10_01: req.body.betgame10_01,
        betgame10_02: req.body.betgame10_02,
        betgame11_01: req.body.betgame11_01,
        betgame11_02: req.body.betgame11_02,
        betgame12_01: req.body.betgame12_01,
        betgame12_02: req.body.betgame12_02,
        betgame13_01: req.body.betgame13_01,
        betgame13_02: req.body.betgame13_02,
        betgame14_01: req.body.betgame14_01,
        betgame14_02: req.body.betgame14_02,
        betgame15_01: req.body.betgame15_01,
        betgame15_02: req.body.betgame15_02,
        betgame16_01: req.body.betgame16_01,
        betgame16_02: req.body.betgame16_02,
        betgame17_01: req.body.betgame17_01,
        betgame17_02: req.body.betgame17_02,
        betgame18_01: req.body.betgame18_01,
        betgame18_02: req.body.betgame18_02,
        betgame19_01: req.body.betgame19_01,
        betgame19_02: req.body.betgame19_02,
        betgame20_01: req.body.betgame20_01,
        betgame20_02: req.body.betgame20_02,
        betgame21_01: req.body.betgame21_01,
        betgame21_02: req.body.betgame21_02,
        betgame22_01: req.body.betgame22_01,
        betgame22_02: req.body.betgame22_02,
        betgame23_01: req.body.betgame23_01,
        betgame23_02: req.body.betgame23_02,
        betgame24_01: req.body.betgame24_01,
        betgame24_02: req.body.betgame24_02,
        betgame25_01: req.body.betgame25_01,
        betgame25_02: req.body.betgame25_02,
        betgame26_01: req.body.betgame26_01,
        betgame26_02: req.body.betgame26_01,
        betgame27_01: req.body.betgame27_01,
        betgame27_02: req.body.betgame27_02,
        betgame28_01: req.body.betgame28_01,
        betgame28_02: req.body.betgame28_02,
        betgame29_01: req.body.betgame29_01,
        betgame29_02: req.body.betgame29_02,
        betgame30_01: req.body.betgame30_01,
        betgame30_02: req.body.betgame30_02,
        betgame31_01: req.body.betgame31_01,
        betgame31_02: req.body.betgame31_02,
        betgame32_01: req.body.betgame32_01,
        betgame32_02: req.body.betgame32_02,
        betgame33_01: req.body.betgame33_01,
        betgame33_02: req.body.betgame33_02,
        betgame34_01: req.body.betgame34_01,
        betgame34_02: req.body.betgame34_02,
        betgame35_01: req.body.betgame35_01,
        betgame35_02: req.body.betgame35_02,
        betgame36_01: req.body.betgame36_01,
        betgame36_02: req.body.betgame36_02,
        betgame37_01: req.body.betgame37_01,
        betgame37_02: req.body.betgame37_02,
        betgame38_01: req.body.betgame38_01,
        betgame38_02: req.body.betgame38_02,
        betgame39_01: req.body.betgame39_01,
        betgame39_02: req.body.betgame39_02,
        betgame40_01: req.body.betgame40_01,
        betgame40_02: req.body.betgame40_02,
        betgame41_01: req.body.betgame41_01,
        betgame41_02: req.body.betgame41_02,
        betgame42_01: req.body.betgame42_01,
        betgame42_02: req.body.betgame42_02,
        betgame43_01: req.body.betgame43_01,
        betgame43_02: req.body.betgame43_02,
        betgame44_01: req.body.betgame44_01,
        betgame44_02: req.body.betgame44_02,
        betgame45_01: req.body.betgame45_01,
        betgame45_02: req.body.betgame45_02,
        betgame46_01: req.body.betgame46_01,
        betgame46_02: req.body.betgame46_02,
        betgame47_01: req.body.betgame47_01,
        betgame47_02: req.body.betgame47_02,
        betgame48_01: req.body.betgame48_01,
        betgame48_02: req.body.betgame48_02,
      };

    
      const response = await this.betsBusiness.Bet(input);
      res.status(201).send(response);
    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }

      res.status(500).send({ message: error.message });
    }
  };

  public getBetsByGroupID = async (req: Request, res: Response) =>  {
    try {
        const id = req.params.id as string;
        
        const response = await this.betsBusiness.fetchBetsofGroup(id);
        res.status(200).send({ response });
    }
    catch (error : any) {
        res.status(500).send({ message: error.message });
    }
  };
}
