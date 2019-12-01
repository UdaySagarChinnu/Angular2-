import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './Users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './Servers/server/server.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'Users', component:UsersComponent,children:[{path:':id/:name', component:UserComponent}]},
  
  {path:'Servers', component:ServersComponent,children:[{path:'Server', component:ServerComponent}]},
    
]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
