import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfItemsComponent } from './components/list-of-items/list-of-items.component';

import { HandlingDirectivesModule } from './directives/handling-directives.module';

@NgModule({
  declarations: [
    AppComponent,
    ListOfItemsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HandlingDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
