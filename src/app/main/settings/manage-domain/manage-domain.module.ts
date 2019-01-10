import { ModalModule } from 'ngx-bootstrap'
import { CoreModule } from './../../../core/core.module'
import { ManageDomainComponent } from './manage-domain.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ManageDomainRoutingModule } from './manage-domain-routing.module'
import { DomainCreateComponent } from './domain-create/domain-create.component'
import { DomainListComponent } from './domain-list/domain-list.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ManageDomainRoutingModule,
    ModalModule,
    ReactiveFormsModule
  ],
  declarations: [
    ManageDomainComponent,
    DomainCreateComponent,
    DomainListComponent,
  ]
})
export class ManageDomainModule { }
