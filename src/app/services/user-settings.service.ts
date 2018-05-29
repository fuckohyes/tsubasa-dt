import { Injectable } from '@angular/core';
import { PlayerData } from '../classes/player-data';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  public data: PlayerData;

  constructor() {
    this.data = new PlayerData();
  }
}
