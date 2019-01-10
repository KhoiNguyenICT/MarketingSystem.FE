import { ModalModule } from 'ngx-bootstrap'
import { ContactShowDataComponent } from './contact-show-data/contact-show-data.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CoreModule } from './../../core/core.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactComponent } from './contact.component'
import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactRoutingModule } from './contact-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    ModalModule
  ],
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactShowDataComponent
  ]
})
export class ContactModule { }
