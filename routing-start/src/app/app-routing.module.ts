import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';

import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },

  {
    path: 'Users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },


  {
    path: 'Servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)], //to register routes
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, ServerComponent, UserComponent];
