import { AppGuard } from './../app.guard'
import { MainComponent } from './main.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AppGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'tools',
                loadChildren: './tools/tools.module#ToolsModule#ToolsModule'
            },
            {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            },
            {
                path: 'account',
                loadChildren: './account/account.module#AccountModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
