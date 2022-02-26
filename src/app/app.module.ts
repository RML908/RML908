import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingMapComponent } from './bing-map/bing-map.component';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    MapModule.forRoot(),
    BingMapComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
