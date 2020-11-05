import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { RouterModule,Routes } from '@angular/router';
const routes = [
  { path: '', component: IntroductionComponent, label: 'Introduction' },
  { path: 'buttons', component: ButtonComponent, label: 'Buttons' },
  { path: 'alerts', component: AlertComponent, label: 'Alerts' },
  { path: 'cards', component: CardComponent, label: 'Cards' },
  { path: 'progress-bar', component: ProgressBarComponent, label: 'Progress bar' }
 ];

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ButtonComponent,
    CardComponent,
    ProgressBarComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
