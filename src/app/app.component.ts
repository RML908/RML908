import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
const
export class AppComponent {
  
  title = 'Fuse_project';

  sayHi(name){
   
   console.log(   `hi, ${name}! how are you?`  );
  }

  constructor() {
  
}
}