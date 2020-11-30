import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefine-pipes',
  templateUrl: './predefine-pipes.component.html',
  styleUrls: ['./predefine-pipes.component.css']
})
export class PredefinePipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
  value="This is test value";
  date=new Date();

}
