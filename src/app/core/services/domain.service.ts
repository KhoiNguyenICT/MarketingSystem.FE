import { Injector, Injectable } from '@angular/core'
import { BaseApiService } from './base-api.service'
import { Domain } from 'types'

@Injectable({
    providedIn: 'root'
})

export class DomainService extends BaseApiService<Domain> {

    constructor(injector: Injector) {
        super(injector)
        this.setBaseUrl('/api/domain')
    }

    getMultiple() {
        return this.get('/list')
    }

}
