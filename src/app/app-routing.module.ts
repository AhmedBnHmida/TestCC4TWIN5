import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/showteams', pathMatch: 'full' },
  {
    path: 'addteam',
    loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule),
  },
  {
    path: 'showteams',
    loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule),
  },
  {
    path: 'myteams',
    loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule),
  },
  { path: '**', component:NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
