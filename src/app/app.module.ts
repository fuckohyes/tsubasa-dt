import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PlayerStatsComponent} from './calculator/components/player-stats/player-stats.component';
import {PlayerStatsResultComponent} from './calculator/components/player-stats-result/player-stats-result.component';
import {FormsModule} from '@angular/forms';
import { BaseStatsComponent } from './calculator/pages/base-stats/base-stats.component';
import {UserSettingsService} from './services/user-settings.service';
import { AppRoutingModule } from './/app-routing.module';
import { SpecialSkillsComponent } from './calculator/pages/special-skills/special-skills.component';
import { LOCALE_ID } from '@angular/core';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { MatIconModule, MatListModule, MatSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatsComponent,
    PlayerStatsResultComponent,
    BaseStatsComponent,
    SpecialSkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserSettingsService,
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
