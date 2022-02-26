import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bing-map',
  templateUrl: './bing-map.component.html',
  styleUrls: ['./bing-map.component.css']
})



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
  @ViewChild('Map', { static: false })
  mapElement!: ElementRef;
}

