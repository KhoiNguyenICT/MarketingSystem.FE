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
    ReactiveFormsModule
  ],
  declarations: [
    ContactComponent,
    ContactListComponent
  ]
})
export class ContactModule { }
