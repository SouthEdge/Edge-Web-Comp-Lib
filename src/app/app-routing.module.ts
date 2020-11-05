import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  routes =  [
    { path: '', component: IntroductionComponent},
    { path: 'buttons', component: ButtonComponent},
    { path: 'alerts', component: AlertComponent},
    { path: 'cards', component: CardComponent},
    { path: 'progress-bar', component: ProgressBarComponent}
   ];
 }
