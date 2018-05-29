import {Stats} from './stats';
import {Player} from './player';

export class PlayerData {
  base: Player = new Player();
  skills: Stats = new Stats(100);

  bonus: {[key: string ]: Stats} = {
    'passive' : new Stats,
    'club' : new Stats,
    'formation': new Stats
  };

  bonus_skills: {[key: string ]: Stats} = {
    'passive' : new Stats
  };
}
