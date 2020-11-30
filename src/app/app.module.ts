import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Data-Binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Data-Binding/property-binding/property-binding.component';
import { AttributeBindingComponent } from './Data-Binding/attribute-binding/attribute-binding.component';
import { TwoWayBindingComponent } from './Data-Binding/two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { ClassBindingComponent } from './Data-Binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Data-Binding/style-binding/style-binding.component';
import { ClickEventComponent } from './Event-Binding/click-event/click-event.component';
import { ClickEventWithinTextFieldComponent } from './Event-Binding/click-event-within-text-field/click-event-within-text-field.component';
import { ChangeEventComponent } from './Event-Binding/change-event/change-event.component';
import { EventEmitterComponent } from './Event-Binding/event-emitter/event-emitter.component';
import { TemplateReferenceComponent } from './Event-Binding/template-reference/template-reference.component';

import { PredefineDirectivesComponent } from './Directives/predefine-directives/predefine-directives.component';
import { NgSwitchAppComponent } from './Directives/predefine-directives/ng-switch-app/ng-switch-app.component';
import { ElementrefInputHostlistnerComponent } from './Directives/CustomDirective/elementref-input-hostlistner/elementref-input-hostlistner.component';
import { MakeredDirective } from './Directives/CustomDirective/elementref-input-hostlistner/makered.directive';
import { ParentComponent } from './CommunicationConponent/parent/parent.component';
import { ChildComponent } from './CommunicationConponent/child/child.component';
import { OutputParentComponent } from './CommunicationConponent/output-parent/output-parent.component';
import { OutputChildComponent } from './CommunicationConponent/output-child/output-child.component';
import {ViewModule} from './view/view.module';
import { RedBlackDirective } from './CustomDirective/red-black.directive';
import { PredefinePipesComponent } from './Pipes/predefine-pipes/predefine-pipes.component';
import { CustomPipesPipe } from './Pipes/custom-pipes.pipe';
import { PureImpurePipesPipe } from './Pipes/pure-impure--pipes.pipe';
import { PureImpureComponent } from './Pipes/pure-impure/pure-impure.component';
import { AdminHomeComponent } from './Route-guards/admin-home/admin-home.component';
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    TwoWayBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    ClickEventComponent,
    ClickEventWithinTextFieldComponent,
    ChangeEventComponent,
    EventEmitterComponent,
    TemplateReferenceComponent,
    PredefineDirectivesComponent,
    NgSwitchAppComponent,
    ElementrefInputHostlistnerComponent,
    MakeredDirective,
    ParentComponent,
    ChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    RedBlackDirective,
    PredefinePipesComponent,
    CustomPipesPipe,
    PureImpurePipesPipe,
    PureImpureComponent,
    AdminHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
