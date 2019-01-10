import { Component, OnInit, forwardRef } from '@angular/core'
import { EmbeddedDataTableAccessorService } from 'app/core/base/data-table/data-table-accessor.service'
import { AccountService } from 'app/core/services/account.service'
import { EntityList, Account } from 'types'
import { Observable } from 'rxjs'
import { merge } from 'utils'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  providers: [{
    provide: EmbeddedDataTableAccessorService,
    useExisting: forwardRef(() => AccountListComponent),
  }]
})
export class AccountListComponent extends EmbeddedDataTableAccessorService implements OnInit {

  PageTitle = 'Accounts'

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {
    super()
  }

  list(params: { skip?: number; take?: number; query?: string }): Observable<EntityList<Account>> {
    return this.accountService.list(merge(params))
  }

  ngOnInit() {
  }

}
