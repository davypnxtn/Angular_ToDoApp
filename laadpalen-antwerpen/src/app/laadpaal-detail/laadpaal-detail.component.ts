import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LaadpalenService } from 'src/Services/laadpalen.service';
import { IFeatures } from 'src/Models/features';
import { IRootObject } from 'src/Models/rootObject';
import { IGeometry } from 'src/Models/geometry';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-laadpaal-detail',
  templateUrl: './laadpaal-detail.component.html',
  styleUrls: ['./laadpaal-detail.component.css']
})
export class LaadpaalDetailComponent implements OnInit {

  public id: number;
  public feature: IFeatures;
  public display: google.maps.LatLngLiteral;
  // public posX;
  // public posY;
  public errorMsg: string;

  zoom: number = 14;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private route: ActivatedRoute, private _laadpalenService: LaadpalenService) { }

  async ngOnInit(): Promise<void> {

    await this.fetchData();
    console.log(this.feature); //undefined? async? not loaded yet?
    this.setGoogleMapLocation(/* this.display */);

  }

  async fetchData() {

    return new Promise((resolve, reject) => {
      this.route.paramMap.subscribe((params: ParamMap) => {
        let id: number = parseInt(params.get('id'));
        this.id = id;
        console.log(this.id);
        this._laadpalenService.getLaadpalen().subscribe((data: IRootObject) => {
          this.feature = data.features.filter(item => item.attributes.OBJECTID === this.id).pop();
          this.display = {
            lat: this.feature.geometry.y,
            lng: this.feature.geometry.x
          }
          console.log(this.feature);
          console.log(this.display);
          resolve({});
        }, (error: any) => {
          this.errorMsg = error
          reject(error);
        });
      });
    });

  }

  setGoogleMapLocation(/* display: google.maps.LatLngLiteral */) {

    //console.log(this.posX, this.posY);
    console.log(this.display); //undefined? async? not loaded yet?
    navigator.geolocation.getCurrentPosition(() => {
      this.center = {
        lat: this.display.lat,
        lng: this.display.lng
      };
    });
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

}
