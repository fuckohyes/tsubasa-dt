import {PlayerData} from './player-data';

export class Calculator {
  data: PlayerData = new PlayerData;

  calcul_stats(stat: string, bonus: number): number {
    return (this.data.base[stat] *
      (100 + this.data.bonus['passive'][stat] + this.data.bonus['club'][stat] + this.data.bonus['formation'][stat]) / 100) + bonus;
  }

  calcul_skill(stat: string, value: number): number {
    return value * (100 + this.data.bonus_skills['passive'][stat]) / 100 * (this.data.skills[stat] / 100);
  }

  get dribble(): number {
    return this.calcul_stats('dribble', this.speed / 2);
  }

  get shoot(): number {
    return this.calcul_stats('shoot', this.power / 2);
  }

  get pass(): number {
    return this.calcul_stats('pass', this.technique / 2);
  }

  get tackle(): number {
    return this.calcul_stats('tackle', this.speed / 2);
  }

  get block(): number {
    return this.calcul_stats('block', this.power / 2);
  }

  get intercept(): number {
    return this.calcul_stats('intercept', this.technique / 2);
  }

  get catch(): number {
    return this.calcul_stats('catch', ((this.power + this.technique) / 4));
  }

  get punch(): number {
    return this.calcul_stats('punch', ((this.power + this.speed) / 4));
  }

  get speed(): number {
    return this.calcul_stats('speed', 0);
  }

  get power(): number {
    return this.calcul_stats('power', 0);
  }

  get technique(): number {
    return this.calcul_stats('technique', 0);
  }

  get dribble_skill(): number {
    return this.calcul_skill('dribble', this.dribble);
  }

  get shoot_skill(): number {
    return this.calcul_skill('shoot', this.shoot);
  }

  get pass_skill(): number {
    return this.calcul_skill('pass', this.pass);
  }

  get tackle_skill(): number {
    return this.calcul_skill('tackle', this.tackle);
  }

  get block_skill(): number {
    return this.calcul_skill('block', this.block);
  }

  get intercept_skill(): number {
    return this.calcul_skill('intercept', this.intercept);
  }

  get catch_skill(): number {
    return this.calcul_skill('catch', this.catch);
  }

  get punch_skill(): number {
    return this.calcul_skill('punch', this.punch);
  }

  get speed_skill(): number {
    return this.calcul_skill('speed', this.speed);
  }

  get power_skill(): number {
    return this.calcul_skill('power', this.power);
  }

  get technique_skill(): number {
    return this.calcul_skill('technique', this.technique);
  }
}
