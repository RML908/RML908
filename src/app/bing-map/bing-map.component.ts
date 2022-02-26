import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css']
})



  
export class BingMapComponent implements OnInit {
  
  public layerType!: string;
  public bingMapType!: string;
  public key!: string;
  

  constructor() { }
  
  
  ngOnInit(): void {
    this.layerType = 'Bing';
    this.bingMapType = 'AerialWithLabel';
    this.key = 'AjSXTx2lvl0DYGcx1ojTmTCxYPlIxnwzIx-kUWwrMkROq3Pn2ojPbQVF07O_kK5T';
// using ViewChild to reference the div instead of setting an id
  }
 
  ngAfterViewInit(){
   
  }

}

