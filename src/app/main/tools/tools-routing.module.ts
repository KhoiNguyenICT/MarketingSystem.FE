import { GenerateTrackingComponent } from './generate-tracking/generate-tracking.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ToolsComponent } from './tools.component'

const routes: Routes = [
    {
        path: '',
        component: ToolsComponent,
        children: [
            {
                path: 'generate-tracking',
                component: GenerateTrackingComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToolsRoutingModule { }
