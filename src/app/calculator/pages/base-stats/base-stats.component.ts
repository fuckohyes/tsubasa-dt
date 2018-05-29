import { Component, OnInit } from '@angular/core';
import { Calculator } from '../../../classes/calculator';
import {UserSettingsService} from '../../../services/user-settings.service';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent implements OnInit {
  player: Calculator;

  constructor(protected userSettings: UserSettingsService) {
    this.player = new Calculator();
    this.player.data = userSettings.data;
  }

  ngOnInit() {

  }
}
