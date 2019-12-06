import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule,CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './Users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './Servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthActivateService } from './auth-activate.service';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'Users', component:UsersComponent,children:[{path:':id/:name', component:UserComponent}]},
  
  {path:'Servers',canActivate:[AuthActivateService], component:ServersComponent,children:[{path:'Server', component:ServerComponent}]},
  {path:'not-found', component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
    
]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
