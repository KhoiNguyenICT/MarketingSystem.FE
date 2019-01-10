import { Injector, Injectable } from '@angular/core'
import { BaseApiService } from './base-api.service'
import { Domain, UrlTracking, EntityList } from 'types'

@Injectable({
    providedIn: 'root'
})

export class ToolsService extends BaseApiService<Domain> {

    constructor(injector: Injector) {
        super(injector)
        this.setBaseUrl('/api/tools')
    }

    generateTracking(urlTracking: UrlTracking) {
        return this.post('/generateTracking', undefined, urlTracking)
    }

    listUrlTracking(params: {
        skip?: number,
        take?: number,
        query?: string
    }) {

        params = Object.assign({
            skip: 0,
            take: 10,
        }, params)

        return this.httpClient.get<EntityList<UrlTracking>>(this.createUrl('/listUrlTracking'), {
            params: this.createParams(params)
        })
    }

}
