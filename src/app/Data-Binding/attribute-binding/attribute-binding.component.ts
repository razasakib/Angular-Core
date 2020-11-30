import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {

//attribute-binding
/*1.In Interpolation and Property binding,
 we discussed that they are dealing with the HTML element properties
(DOM Properties) and not with the attributes.
 2.Why do we need attribute data binding?
 
In some situations, we may need to bind HTML element attributes. 
For example, colspan, area, height, width, placeholder, value, etc. 
There are a number of HTML attributes. HTML does not have any corresponding DOM
 (Document Object Model) properties. So, in this case, we need to bind to HTML 
 element attributes.
 */
public mergeCount=2;





  constructor() { }

  ngOnInit(): void {
  }

}
