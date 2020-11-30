import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent implements OnInit {
data;
  constructor() { }

  ngOnInit(): void {
  }
  MouseOver(event){
    this.data=event.target.value;
    console.log(event.target.value);
  }

}
