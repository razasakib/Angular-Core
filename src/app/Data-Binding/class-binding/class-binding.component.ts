import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

   //dynamically making css using class
   public successClass="text-success";
   //apply for single class
   public hashError=true;
   public isSpecial=true;


   //(ngClass)
   //apply multiple class
   public messageClasses={
     "text-success":!this.hashError,
     "text-danger":this.hashError,
     "text-special":this.isSpecial
   }




  constructor() { }

  ngOnInit(): void {
  }

}
