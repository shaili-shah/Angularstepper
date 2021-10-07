import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  { path : '' , redirectTo : '/teamDetail', pathMatch : "full" },
  { path : 'teamDetail' , component : TeamDetailComponent },
  { path : 'manageTeam' , component : ManageTeamComponent },
  { path : '**' , component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
