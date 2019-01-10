import { ManageDomainModule } from './manage-domain/manage-domain.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from './settings.component'
import { SettingsRoutingModule } from './settings-routing.module'

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ManageDomainModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
