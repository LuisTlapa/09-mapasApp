import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!:ElementRef
  mapa!: mapboxgl.Map
  zoomLevel: number =10

  constructor() {
   }

  ngAfterViewInit(): void {

    console.log("after",this.divMapa);
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-96.91348207666158, 19.54216578647094], // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    })

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom()
      
      
    })
  }
  zoomIn(){
    this.mapa.zoomIn()
  }
  zomOut(){
    this.mapa.zoomOut()

    
  }
}
