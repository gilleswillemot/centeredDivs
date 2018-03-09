import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CenterDivsComponent } from './center-divs/center-divs.component';


@NgModule({
  declarations: [
    AppComponent,
    CenterDivsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
