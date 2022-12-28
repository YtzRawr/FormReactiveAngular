import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ExLogin } from './login/exlogin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ExLogin } from './login/exlogin.component';
import {LoginComponent} from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ExLogin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
