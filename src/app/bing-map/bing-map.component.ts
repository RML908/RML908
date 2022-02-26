import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css']
})



export class BingMapComponent implements OnInit {

 
  // using ViewChild to reference the div instead of setting an id

 
  

  constructor() { }

  
  ngOnInit(): void {
  

  }
 
  ngAfterViewInit(){
   
  }

}

