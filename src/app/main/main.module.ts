import { ContactModule } from './contact/contact.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainComponent } from './main.component'
import { MainRoutingModule } from './main-routing.module'
import { CoreModule } from '../core/core.module'
import { ToolsModule } from './tools/tools.module'
import { SettingsModule } from './settings/settings.module'

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    ToolsModule,
    SettingsModule,
    ContactModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
