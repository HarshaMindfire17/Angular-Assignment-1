import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';  
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableDataSource} from '@angular/material/table';
const routes:Routes=[
  { path: 'display', component: DisplayComponent },
  { path: '', redirectTo: '/display', pathMatch: 'full' }, 
]
@NgModule(
  {
  declarations: [
    AppComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    NoopAnimationsModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
