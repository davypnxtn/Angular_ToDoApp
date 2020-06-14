import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute , Router, ParamMap, RouterEvent, NavigationEnd } from '@angular/router';
import { LaadpalenService } from 'src/Services/laadpalen.service';
import { IFeatures } from 'src/Models/features';
import { IRootObject } from 'src/Models/rootObject';
import { filter, takeUntil, startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-laadpaal-list',
  templateUrl: './laadpaal-list.component.html',
  styleUrls: ['./laadpaal-list.component.css']
})
export class LaadpaalListComponent implements OnInit {
  
  public regio: string;
  public features: IFeatures[] = [];
  public errorMsg: string;
  public destroyed: Subject<any> = new Subject<any>();

  constructor(private route: ActivatedRoute, private router: Router, private _laadpalenService: LaadpalenService) { }

  ngOnInit(): void{

      this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      startWith('Initial call'),
      takeUntil(this.destroyed)).subscribe(() => {
        this.fetchData();
      });

    // First init works like expected, but following inits only work if same routeparameter is used twice 
    // this.router.events.pipe(
    //   filter((event: RouterEvent) => event instanceof NavigationEnd),
    //   pairwise(),
    //   filter((events: RouterEvent[]) => events[0].url === events[1].url),
    //   startWith('Initial call'),
    //   takeUntil(this.destroyed)).subscribe(() => {
    //   this.fetchData();
    // });

  }

  fetchData() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let regio = params.get('regio');
      this.regio = regio;
      console.log("hallo", this.regio);
    })

    this._laadpalenService.getLaadpalen().subscribe((data: IRootObject) => {
      // console.log(data);
      this.features = data.features.filter(item => item.attributes.District === this.regio);
      // let regio = [...new Set(data.features.map(item => item.attributes.District))].toString();
      // this.regios.push(regio);
    }, (error: any) => this.errorMsg = error);
  }

  ngOnDestroy(): void {

    this.destroyed.next();
    this.destroyed.complete();
    
  }
}

