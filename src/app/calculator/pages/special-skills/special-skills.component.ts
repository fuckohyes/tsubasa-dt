import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Calculator } from '../../../classes/calculator';
import { UserSettingsService } from '../../../services/user-settings.service';

@Component({
  selector: 'app-base-stats',
  templateUrl: './special-skills.component.html',
  styleUrls: ['./special-skills.component.css']
})
export class SpecialSkillsComponent {
  public player: Calculator;

  constructor(protected userSettings: UserSettingsService) {
    this.player = new Calculator();
    this.player.data = userSettings.data;
  }
}
