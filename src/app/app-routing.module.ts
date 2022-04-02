import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { BingMapComponent } from './bing-map/bing-map.component';
// import { BingMapComponent } from './bing-map/bing-map.component';

const routes: Routes = [
  // {
  //   path:'bing-map'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
