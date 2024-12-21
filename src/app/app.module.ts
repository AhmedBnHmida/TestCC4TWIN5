import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamModule } from './features/team/team.module';
import { ParticipantModule } from './features/participant/participant.module';
import { TeamsComponent } from './components/teams/teams.component';
import { FormteamComponent } from './components/formteam/formteam.component';
import { MyteamsComponent } from './components/myteams/myteams.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    FooterComponent,
    TeamsComponent,
    FormteamComponent,
    MyteamsComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamModule,
    ParticipantModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
