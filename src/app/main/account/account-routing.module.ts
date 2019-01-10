import { AccountListComponent } from './account-list/account-list.component'
import { AccountCreateComponent } from './account-create/account-create.component'
import { AccountComponent } from './account.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'account-create',
                component: AccountCreateComponent
            },
            {
                path: 'account-list',
                component: AccountListComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
