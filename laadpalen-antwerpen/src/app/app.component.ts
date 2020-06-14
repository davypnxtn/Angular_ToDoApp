import { Component, OnInit } from '@angular/core';
import { LaadpalenService } from 'src/Services/laadpalen.service';
import { IRootObject } from 'src/Models/rootObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  public appTitle: string = "Laadpalen Antwerpen";
  public regios: string[] = [];
  public errorMsg: string;
  
  constructor(private _laadpalenService: LaadpalenService){}

  ngOnInit(): void {
    this._laadpalenService.getLaadpalen().subscribe((data: IRootObject) => {
      this.regios = [...new Set(data.features.map(item => item.attributes.District))];
      // console.log(this.regios);
    }, (error: any) => this.errorMsg = error);
  }
  // zoom: number = 12;
  // center: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'hybrid',
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   maxZoom: 12,
  //   minZoom: 8,
  // };

  // ngOnInit() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.center = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //   });
  // };

  // zoomIn() {
  //   if (this.zoom < this.options.maxZoom) this.zoom++;
  // };

  // zoomOut() {
  //   if (this.zoom > this.options.minZoom) this.zoom--;
  // };
}
