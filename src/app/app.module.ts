import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonComponent } from './lessons/lesson.component';

// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
  LessonComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyC92wlbwat_0jupbsww0tQh6ZtvvgtHbuc'
    // })
    
   
  ],
  providers: [  
    // { 
    //   provide: MapAPILoader, deps: [], useFactory: BingMapServiceProviderFactory 
    // }
  ],
  bootstrap: [  AppComponent]

})
export class AppModule { }

