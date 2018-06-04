import { Component } from '@angular/core';
import {Calculator} from './classes/calculator';
import {LOCALE_ID} from '@angular/core';
import {Inject} from '@angular/core';
import {UserSettingsService} from './services/user-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  player: Calculator;

  constructor(protected userSettings: UserSettingsService, @Inject(LOCALE_ID) public locale: string) {
    this.player = new Calculator();
    this.player.data = userSettings.data;
  }
}
