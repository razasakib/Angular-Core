import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {


  public myId=25;

  public isDiabled=true; 


  constructor() { }

  ngOnInit(): void {
  }

}
