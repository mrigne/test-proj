import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestinputComponent } from './testinput/testinput.component';
import { NgxRouteParamsInputModule } from 'ngx-route-params-input';

@NgModule({
  declarations: [
    AppComponent,
    TestinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRouteParamsInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
