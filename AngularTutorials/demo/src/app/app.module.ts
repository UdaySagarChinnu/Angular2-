import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainServerComponent } from './main-server/main-server.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { BasicdirectiveDirective } from './directives/basicdirective.directive';
import { BasichighlightdirectiveDirective } from './directives/basichighlightdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainServerComponent,
    ServerComponent,
    BasicdirectiveDirective,
    BasichighlightdirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
