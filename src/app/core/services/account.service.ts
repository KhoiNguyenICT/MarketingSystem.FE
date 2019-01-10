import { Injector, Injectable } from '@angular/core'
import { BaseApiService } from './base-api.service'
import { Account } from 'types'

@Injectable({
    providedIn: 'root'
})

export class AccountService extends BaseApiService<Account> {

    constructor(injector: Injector) {
        super(injector)
        this.setBaseUrl('/api/account')
    }

}
