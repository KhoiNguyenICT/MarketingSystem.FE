import { DomainListComponent } from './domain-list/domain-list.component'
import { ManageDomainComponent } from './manage-domain.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        component: ManageDomainComponent,
        children: [
            {
                path: 'domain-list',
                component: DomainListComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageDomainRoutingModule { }
