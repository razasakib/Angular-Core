import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output('childEvent') 
   public data=new EventEmitter();
   
  constructor() { }

  ngOnInit(): void {
  }

  EventEmitterData(value){
         this.data.emit(value);
  }


}
