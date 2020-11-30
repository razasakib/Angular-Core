import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {
   nam;
   ag;
  constructor() { }

  ngOnInit(): void   {
  }

  onSave(n,a){
     console.log(this.nam=n.value);
      console.log(this.ag=a.value);
  }

}
