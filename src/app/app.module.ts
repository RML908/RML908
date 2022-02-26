import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingMapComponent } from './bing-map/bing-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    BingMapComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// // export function MapServiceProviderFactory(){
// //     let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
// //     bc.apiKey ="Ap0AObt84NcDaUThCeWOj52ZqUHv6k4TJhjLibR-DghC-semgoj-0uPbIi8r0E4j"; // your bing map key
// //     bc.branch = "experimental"; 
// //         // to use the experimental bing brach. There are some bug fixes for
// //         // clustering in that branch you will need if you want to use 
// //         // clustering.
// //     return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
// }
