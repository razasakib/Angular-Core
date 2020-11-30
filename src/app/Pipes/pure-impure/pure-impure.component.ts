import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-impure',
  templateUrl: './pure-impure.component.html',
  styleUrls: ['./pure-impure.component.css']
})
export class PureImpureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  public country=['india','Rusia','Srilanka'];
  add(value){
  //  console.log(value);
    this.country.push(value);
    console.log(this.country);

  }
}
