import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcelistaddRoutingModule } from './resourcelistadd-routing.module';
import { ResourcelistaddComponent } from './resourcelistadd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ResourcelistaddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResourcelistaddRoutingModule
  ]
})
export class ResourcelistaddModule { }
