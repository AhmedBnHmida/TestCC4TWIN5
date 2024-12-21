import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamModule } from './team.module';
import { FormteamComponent } from 'src/app/components/formteam/formteam.component';
import { TeamComponent } from 'src/app/components/team/team.component';
import { TeamsComponent } from 'src/app/components/teams/teams.component';
import { MyteamsComponent } from 'src/app/components/myteams/myteams.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/showteams', pathMatch: 'full' },
  { path: 'showteams', component:TeamsComponent },
  { path: 'addteam', component:FormteamComponent },
  { path: 'myteams', component:MyteamsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
