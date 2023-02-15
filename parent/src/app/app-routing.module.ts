import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
  {
    path: '',
    component: InitialComponent,
    pathMatch: 'full',
  },
  {
    path: 'first_children',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4801/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((m) => {
        return m.AmfModule;
      }),
  },
  // {
  //   path: 'second_children',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteEntry: 'http://localhost:5000/remoteEntry.js',
  //       type: 'module',
  //       exposedModule: './Module1',
  //     }).then((m) => {
  //       return m.Amf1Module;
  //     }),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
