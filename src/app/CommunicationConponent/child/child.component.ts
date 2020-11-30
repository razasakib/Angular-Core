 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input('parentData') 
  public name;//parent data 

@Input('pnameData')
  public pname;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.name)
  }

}
