import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegpageComponent } from './regpage/regpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const ROUTES: Routes =[
  {path: 'regpage', component: RegpageComponent},
  {path: 'loginpage', component: LoginpageComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, RegpageComponent, LoginpageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
