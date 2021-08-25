import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolemasteraddComponent } from './rolemasteradd.component';

const routes: Routes = [{
  path: '',
  component: RolemasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolemasteraddRoutingModule { }
