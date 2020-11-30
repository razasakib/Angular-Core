import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css']
})
export class ClickEventComponent implements OnInit {
  count=0;
  constructor() { }

  ngOnInit(): void {
  }
 
  ngDecreses(){
    if(this.count>0){
      this.count--;
       console.log("count increases:"+this.count);
    }
    
  }
  ngIncreses(){
    
    this.count++;
     console.log("count increases:"+this.count);
     
   }



}
