import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event-within-text-field',
  templateUrl: './click-event-within-text-field.component.html',
  styleUrls: ['./click-event-within-text-field.component.css']
})
export class ClickEventWithinTextFieldComponent implements OnInit {
  data;
  constructor() { }

  ngOnInit(): void {
  }
  onSave(event){
    this.data=event.target.value;
    console.log(event.target.value);
  }

}
