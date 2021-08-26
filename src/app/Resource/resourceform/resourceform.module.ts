import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceformRoutingModule } from './resourceform-routing.module';
import { ResourceformComponent } from './resourceform.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MatInputModule,  } from '@angular/material/input';


@NgModule({
  declarations: [
    ResourceformComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    ResourceformRoutingModule
  ]
})
export class ResourceformModule { }
