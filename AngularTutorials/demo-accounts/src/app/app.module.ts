import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountServiceService } from './services/account-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
