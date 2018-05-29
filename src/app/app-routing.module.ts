import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseStatsComponent } from './calculator/pages/base-stats/base-stats.component';
import {SpecialSkillsComponent} from './calculator/pages/special-skills/special-skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/base-stats', pathMatch: 'full' },
  { path: 'base-stats', component: BaseStatsComponent },
  { path: 'special-skills', component: SpecialSkillsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
