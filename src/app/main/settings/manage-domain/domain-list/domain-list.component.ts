import { Component, OnInit, forwardRef, ViewChild } from '@angular/core'
import { EmbeddedDataTableAccessorService } from 'app/core/base/data-table/data-table-accessor.service'
import { DomainService } from 'app/core/services/domain.service'
import { merge } from 'utils'
import { Observable } from 'rxjs'
import { EntityList, Domain } from 'types'
import { DataTableComponent } from 'app/core/base/data-table/data-table.component'

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css'],
  providers: [{
    provide: EmbeddedDataTableAccessorService,
    useExisting: forwardRef(() => DomainListComponent),
  }]
})
export class DomainListComponent extends EmbeddedDataTableAccessorService implements OnInit {

  PageTitle = 'Domains'
  @ViewChild('dataTable') dataTable: DataTableComponent

  constructor(
    private domainService: DomainService
  ) {
    super()
  }

  ngOnInit() {
  }

  list(params: { skip?: number; take?: number; query?: string; }): Observable<EntityList<Domain>> {
    return this.domainService.list(merge(params))
  }

  onDelete(id) {}

}
