import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css']
})

let myMap:any
@ViewChild('myMap')myMap; 
export class BingMapComponent implements OnInit {
  
 
  // using ViewChild to reference the div instead of setting an id
  public pageTitle: string = "Map";
  myMap: any;

  constructor() { }

  
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    var map = new Microsoft.Maps.Map(this.myMap.nativeElement, {
        credentials: 'Bing Map Key - I removed it here'
    });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null || undefined);
    var layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);
  }
}

