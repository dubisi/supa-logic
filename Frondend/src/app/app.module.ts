import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorldsoccerComponent } from './worldsoccer/worldsoccer.component';
import { HttpClientModule } from '@angular/common/http';
import { WorldknowledgeComponent } from './worldknowledge/worldknowledge.component';
import { WorldamericanComponent } from './worldamerican/worldamerican.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WordsoccerComponent } from './wordsoccer/wordsoccer.component';
import { WordknowledgeComponent } from './wordknowledge/wordknowledge.component';
import { WordamericanComponent } from './wordamerican/wordamerican.component';
import { DashboardGuard } from './dashboard.guard';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightDirective } from './highlight.directive';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'world-soccer', component: WorldsoccerComponent },
  { path: 'world-knowledge', component: WorldknowledgeComponent },
  { path: 'world-american', component: WorldamericanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'soccer-table',
        component: WordsoccerComponent,
        canActivate: [DashboardGuard],
      },
      {
        path: 'american-table',
        component: WordamericanComponent,
        canActivate: [DashboardGuard],
      },
      {
        path: 'knowledge-table',
        component: WordknowledgeComponent,
        canActivate: [DashboardGuard],
      },
    ],
    canActivate: [DashboardGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorldsoccerComponent,
    WorldknowledgeComponent,
    WorldamericanComponent,
    LoginComponent,
    DashboardComponent,
    WordsoccerComponent,
    WordknowledgeComponent,
    WordamericanComponent,
    LogoutComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
