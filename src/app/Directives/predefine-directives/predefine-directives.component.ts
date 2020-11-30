import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefine-directives',
  templateUrl: './predefine-directives.component.html',
  styleUrls: ['./predefine-directives.component.css']
})
export class PredefineDirectivesComponent implements OnInit {
 
  public product=[
   {
   id:1, name:"tv",price:45000
   }
 ]
  constructor() { }

  ngOnInit(): void {
  }
 public trackById(index,product){
   console.log(product.id);
     return product.id;
 }


}
