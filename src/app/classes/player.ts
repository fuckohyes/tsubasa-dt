export class Player {
  id: number = 0;

  name: {[key: string ]: string} = {
    'fr': 'Mon nom est Personne',
    'en': 'My Name Is Nobody'
  };

  nickname: {[key: string ]: string} = {
    'fr': 'Western Spaghetti',
    'en': 'Spaghetti Western'
  };
  nationality: {[key: string ]: string} = {
    'fr': 'États-Unis',
    'en': 'United States'
  };

  team: {[key: string ]: string} = {
    'fr': 'La Horde Sauvage',
    'en': 'The Wild Bunch'
  };

  positionGk: boolean = false;
  positionOmf: boolean = true;
  positionDmf: boolean = false;
  positionFw: boolean = false;
  positionDf: boolean = false;

  rarity: string = 'SR';
  attribute: string = 'A';
  startDate: string = '2018-01-01';

  dribble: number = 5000;
  shoot: number = 5000;
  pass: number = 5000;
  tackle: number = 5000;
  block: number = 5000;
  intercept: number = 5000;
  catch: number = 5000;
  punch: number = 5000;
  speed: number = 5000;
  power: number = 5000;
  technique: number = 5000;
  stamina: number = 5000;
}
