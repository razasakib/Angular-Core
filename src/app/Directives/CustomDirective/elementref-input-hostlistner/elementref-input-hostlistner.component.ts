
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-elementref-input-hostlistner',
  templateUrl: './elementref-input-hostlistner.component.html',
  styleUrls: ['./elementref-input-hostlistner.component.css']
})
export class ElementrefInputHostlistnerComponent implements AfterViewInit {

  
  @ViewChild("myDiv") divView: ElementRef;

  ngAfterViewInit(){

    console.log(this.divView);
    this.divView.nativeElement.innerHTML = "Hello Angular 10!";

  }

}
