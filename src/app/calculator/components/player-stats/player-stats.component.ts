import { Component, OnInit, Input } from '@angular/core';
import { Calculator } from '../../../classes/calculator';
import { UserSettingsService } from '../../../services/user-settings.service';
import {Stats} from '../../../classes/stats';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  @Input() stats: Stats;
  @Input() player: Calculator;
  @Input() bonus: boolean = false;
  @Input() physical: boolean = true;

  constructor(protected userSettingService: UserSettingsService) {

  }

  ngOnInit() {}

  onChange(event) {

  }
}
