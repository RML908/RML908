import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Ffile-type-angular%2F130754&psig=AOvVaw0upoR0urdMEtHHzQfwaqOs&ust=1649014846879000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD_hJSR9vYCFQAAAAAdAAAAABAD'

  person = {
    name: "Rafayel",
    age: 18,
    national: "Arm"
  }

constructor(){
  
}

}
