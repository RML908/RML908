import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonComponent } from './lessons/lesson.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';

// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
  LessonComponent,
  Lesson2Component,
  Lesson3Component,
  Lesson4Component,
    
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
  bootstrap: [AppComponent]

})
export class AppModule { }

