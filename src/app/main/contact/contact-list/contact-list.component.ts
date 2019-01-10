import { ToastrService } from 'ngx-toastr'
import { DomainService } from 'app/core/services/domain.service'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Component, OnInit, forwardRef, ViewChild } from '@angular/core'
import { EmbeddedDataTableAccessorService } from 'app/core/base/data-table/data-table-accessor.service'
import { Observable } from 'rxjs'
import { EntityList, Contact, Domain, QueryParams, SortDirection } from 'types'
import { ContactService } from 'app/core/services/contact.service'
import { merge } from 'utils'
import { DataTableComponent } from 'app/core/base/data-table/data-table.component'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [{
    provide: EmbeddedDataTableAccessorService,
    useExisting: forwardRef(() => ContactListComponent),
  }]
})
export class ContactListComponent extends EmbeddedDataTableAccessorService implements OnInit {

  PageTitle = 'Contacts'
  @ViewChild('dataTable') dataTable: DataTableComponent
  form: FormGroup
  domains = [] as Domain[]

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private domainService: DomainService,
    private toastr: ToastrService
  ) {
    super()
  }

  ngOnInit() {
    this.buildFormFilter()
    this.buildStatic()
  }

  list(params: { skip?: number; take?: number; query?: string }): Observable<EntityList<Contact>> {
    return this.contactService.list(merge(params))
  }

  onRefresh() {
    this.form.reset()
  }

  onFilter() {
    const filter = this.form.value
    this.dataTable.onFilter(filter)
  }

  onSelectDomain(event) {
    this.form.patchValue({
      domain: event.address
    })
  }

  private buildFormFilter() {
    this.form = this.formBuilder.group({
      fromTime: undefined,
      toTime: undefined,
      domain: undefined,
      utmCampaign: undefined,
      utmAdset: undefined,
      utmAds: undefined,
      utmAgent: undefined,
      utmMedium: undefined,
      utmSource: undefined,
      utmTeam: undefined
    })
  }

  private buildStatic() {
    const success = res => {
      this.domains = res
    }
    const error = err => {
      this.toastr.error(err.message)
    }
    this.domainService.getMultiple().subscribe(success, error)
  }

}
