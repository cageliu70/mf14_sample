import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmfRoutingModule } from './amf-routing.module';
import { ChildrenComponent } from './amfcomponents/children/children.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ChildrenComponent
  ],
  imports: [
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    AmfRoutingModule
  ]
})
export class AmfModule { }
