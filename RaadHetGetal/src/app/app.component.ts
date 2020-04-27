import { Component, NgModule } from '@angular/core';
import * as _ from 'lodash';
import { Timer } from 'src/Models/Timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RaadHetGetal';
  public t:Timer = new Timer();
  teller = 0;
  rnd = 0;
  result = "";
  aantal = "";
  counter = 0;

  constructor(){
    this.rnd = _.random( 1, 1000);
    console.log(this.rnd);
  }

  check(value:number){
    this.t.startTimer();
    this.counter = this.t.counter;

    if (value == this.rnd){
      this.teller ++;
      this.t.stopTimer();
      this.result = "Hoera, Juist geraden! Het getal is inderdaad " + this.rnd;
      if (this.counter == null){
        this.aantal = "Je hebt " + this.teller + " keer geraden en hebt het onmiddelijk juist! Je bent een kampioen!"
      } else {
        this.aantal = "Je hebt " + this.teller + " keer geraden en had " +  Math.round(this.counter/1000) + " seconden nodig om het getal te vinden!"
      }
      console.log(this.counter);
    }
    else if (value < this.rnd){
      this.teller ++;
      this.result = "Het getal is te laag";
    }
    else{
      this.teller ++;
      this.result = "Het getal is te hoog";
    }
    console.log(this.teller);
  }

  reset(){
    this.t.resetTimer();
    window.location.reload();
    //this.rnd = _.random( 1, 1000);
    //document.querySelector("input").value = "";
    //this.t.resetTimer();
    //this.teller = 0;
    //this.result = "";
    //this.aantal = "";
    //console.log(this.rnd);
    //console.log(this.teller);
    //console.log(this.counter);
  }
}
