import { ManageDomainComponent } from './manage-domain/manage-domain.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SettingsComponent } from './settings.component'

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: 'manage-domain',
                component: ManageDomainComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
