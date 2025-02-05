import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routeCompArr } from './app-routing.module';




@NgModule({
  declarations: [AppComponent,
    routeCompArr],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
