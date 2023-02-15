import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './amfcomponents/children/children.component';

const routes: Routes = [
  {
    path: '',
    component: ChildrenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmfRoutingModule { }
