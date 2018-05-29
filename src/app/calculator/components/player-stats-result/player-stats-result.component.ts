import {Component, Input, OnInit} from '@angular/core';
import {Stats} from '../../../classes/stats';
import {Calculator} from '../../../classes/calculator';

@Component({
  selector: 'app-player-stats-result',
  templateUrl: './player-stats-result.component.html',
  styleUrls: ['./player-stats-result.component.css']
})
export class PlayerStatsResultComponent implements OnInit {
  @Input() specialSkills: boolean = false;
  @Input() stats: Stats;
  @Input() player: Calculator;
  @Input() bonus: boolean = false;
  @Input() physical: boolean = true;

  constructor() { }

  ngOnInit() {

  }
}
