import { AuthService } from './services/auth.service'
import { BreadcrumbComponent } from './base/breadcrumb/breadcrumb.component'
import { CommonModule } from '@angular/common'
import { ConfirmationComponent } from './base/confirmation/confirmation.component'
import { DataTableComponent } from './base/data-table/data-table.component'
import { HeaderComponent } from './layout/header/header.component'
import { NgModule } from '@angular/core'
import { PageTitleComponent } from './base/page-title/page-title.component'
import { QuantityComponent } from './base/quantity/quantity.component'
import { RouterModule } from '@angular/router'
import { SearchInputComponent } from './base/search-input/search-input.component'
import { SessionService } from './services/session.service'
import { SidebarComponent } from './layout/sidebar/sidebar.component'
import { SidebarSearchComponent } from './layout/sidebar-search/sidebar-search.component'
import { UserNavComponent } from './layout/user-nav/user-nav.component'
import { LoadingComponent } from './base/loading/loading.component'
import { NoResultsComponent } from './base/no-results/no-results.component'
import { PaginationComponent } from './base/pagination/pagination.component'
import { FormsModule } from '@angular/forms'
import { DomainService } from './services/domain.service'
import { SelectBoxComponent } from './base/select-box/select-box.component'
import { ToolsService } from './services/tools.service'
import { ContactService } from './services/contact.service'
import { TruncatePipe } from './pipes/truncate-string.pipe'
import { AccountService } from './services/account.service'
import { ContactDataCountFieldsPipe } from './pipes/contact-data-count-fields.pipe'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    UserNavComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarSearchComponent,
    BreadcrumbComponent,
    ConfirmationComponent,
    DataTableComponent,
    ConfirmationComponent,
    PageTitleComponent,
    PaginationComponent,
    QuantityComponent,
    SearchInputComponent,
    LoadingComponent,
    NoResultsComponent,
    SelectBoxComponent,
    TruncatePipe,
    ContactDataCountFieldsPipe
  ],
  exports: [
    UserNavComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarSearchComponent,
    BreadcrumbComponent,
    NoResultsComponent,
    PageTitleComponent,
    DataTableComponent,
    SelectBoxComponent,
    TruncatePipe,
    ContactDataCountFieldsPipe
  ],
  providers: [
    AuthService,
    SessionService,
    DomainService,
    ToolsService,
    ContactService,
    AccountService
  ]
})
export class CoreModule { }
