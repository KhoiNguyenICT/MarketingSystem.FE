import { ReactiveFormsModule } from '@angular/forms'
import { CoreModule } from './../../core/core.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolsComponent } from './tools.component'
import { GenerateTrackingComponent } from './generate-tracking/generate-tracking.component'
import { ToolsRoutingModule } from './tools-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ToolsRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [ToolsComponent, GenerateTrackingComponent]
})
export class ToolsModule { }
