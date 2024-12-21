import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppComponent } from './app.component';
import { FormteamComponent } from './components/formteam/formteam.component';

const routes: Routes = [
  { path:"home" , component:AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'team',
    loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule),
  },

  { path: '**', component:NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
