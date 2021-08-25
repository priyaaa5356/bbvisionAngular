import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolemasterComponent } from './rolemaster.component';

const routes: Routes = [{
  path: '',
  component: RolemasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolemasterRoutingModule { }
