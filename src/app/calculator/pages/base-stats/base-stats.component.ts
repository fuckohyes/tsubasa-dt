import { Component, OnInit } from '@angular/core';
import { Calculator } from '../../../classes/calculator';
import {UserSettingsService} from '../../../services/user-settings.service';
import {LOCALE_ID} from '@angular/core';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.css']
})
export class BaseStatsComponent implements OnInit {
  player: Calculator;

  constructor(protected userSettings: UserSettingsService, @Inject(LOCALE_ID) public locale: string) {
    this.player = new Calculator();
    this.player.data = userSettings.data;
  }

  ngOnInit() {

  }
}
