import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LaadpalenService } from 'src/Services/laadpalen.service';
import { IRootObject } from 'src/Models/rootObject';
import { IFeatures } from 'src/Models/features';

@Component({
  selector: 'app-laadpaal-app',
  templateUrl: './laadpaal-app.component.html',
  styleUrls: ['./laadpaal-app.component.css']
})
export class LaadpaalAppComponent implements OnInit {

  // public laadpaal: ILaadpaal;
  public features: IFeatures[] = [];
  // public regios: string[] = [];
  public errorMsg: string;

  // @Output() public allRegios = new EventEmitter();
  
  constructor(private _laadpalenService: LaadpalenService) { }

  ngOnInit(): void{
    
    this.fetchData();

  }

  fetchData() {

    this._laadpalenService.getLaadpalen().subscribe((data: IRootObject) => {
      // console.log(data);
      this.features = data.features;
      // let regio = [...new Set(data.features.map(item => item.attributes.District))].toString();
      // this.regios.push(regio);
    }, (error: any) => this.errorMsg = error);

  }

}
