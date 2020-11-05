import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes =  [
    { path: '', component: IntroductionComponent, label: 'Introduction' },
    { path: 'buttons', component: ButtonComponent, label: 'Buttons' },
    { path: 'alerts', component: AlertComponent, label: 'Alerts' },
    { path: 'cards', component: CardComponent, label: 'Cards' },
    { path: 'progress-bar', component: ProgressBarComponent, label: 'Progress bar' }
   ];
}
