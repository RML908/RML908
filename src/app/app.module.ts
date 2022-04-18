import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {CommonModule} from "@angular/common";

// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,

  Lesson3Component,
  Lesson4Component,
  PostFormComponent,
  PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule


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

