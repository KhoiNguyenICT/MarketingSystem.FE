import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccountComponent } from './account.component'
import { AccountCreateComponent } from './account-create/account-create.component'
import { AccountRoutingModule } from './account-routing.module'
import { AccountListComponent } from './account-list/account-list.component'
import { CoreModule } from 'app/core/core.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    AccountComponent,
    AccountCreateComponent,
    AccountListComponent
  ]
})
export class AccountModule { }
