import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceformRoutingModule } from './resourceform-routing.module';
import { ResourceformComponent } from './resourceform.component';


@NgModule({
  declarations: [
    ResourceformComponent
  ],
  imports: [
    CommonModule,
    ResourceformRoutingModule
  ]
})
export class ResourceformModule { }
