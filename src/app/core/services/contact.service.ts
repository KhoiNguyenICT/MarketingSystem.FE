import { Injector, Injectable } from '@angular/core'
import { BaseApiService } from './base-api.service'
import { Contact, EntityList } from 'types'

@Injectable({
    providedIn: 'root'
})

export class ContactService extends BaseApiService<Contact> {

    constructor(injector: Injector) {
        super(injector)
        this.setBaseUrl('/api/contact')
    }

}
