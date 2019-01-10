import { DomainService } from 'app/core/services/domain.service'
import { Component, OnInit, forwardRef, ViewChild } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { UrlTracking, Domain, EntityList } from 'types'
import { ToastrService } from 'ngx-toastr'
import { ToolsService } from 'app/core/services/tools.service'
import { EmbeddedDataTableAccessorService } from 'app/core/base/data-table/data-table-accessor.service'
import { Observable } from 'rxjs'
import { merge } from 'utils'
import { DataTableComponent } from 'app/core/base/data-table/data-table.component'
import { SessionService } from 'app/core/services/session.service'

@Component({
  selector: 'app-generate-tracking',
  templateUrl: './generate-tracking.component.html',
  styleUrls: ['./generate-tracking.component.css'],
  providers: [{
    provide: EmbeddedDataTableAccessorService,
    useExisting: forwardRef(() => GenerateTrackingComponent),
  }]
})
export class GenerateTrackingComponent extends EmbeddedDataTableAccessorService implements OnInit {

  PageTitle = 'Generate Tracking'
  @ViewChild('dataTable') dataTable: DataTableComponent
  form: FormGroup
  name = ''
  domains = [] as Domain[]
  selectedDomain = {} as Domain
  accountId: string

  constructor(
    private formBuilder: FormBuilder,
    private domainService: DomainService,
    private toastr: ToastrService,
    private toolsService: ToolsService,
    private sessionService: SessionService,
  ) {
    super()
  }

  ngOnInit() {
    this.buildFormGenerateTracking()
    this.buildStatic()
  }

  list(params: { skip?: number; take?: number; query?: string; }): Observable<EntityList<Domain>> {
    return this.toolsService.listUrlTracking(merge(params))
  }

  onVisitSite(domain: string) {
    window.location.href = domain
  }

  onSubmit() {
    this.accountId = this.sessionService.accountData.id
    this.form.patchValue({
      createdById: this.accountId,
      domain: this.selectedDomain.address
    })
    const value = this.form.value
    const success = res => {
      this.toastr.success('Create tracking successfully')
      this.dataTable.fetch()
    }
    const error = err => {
      this.toastr.error(err.message)
    }
    this.toolsService.generateTracking(value).subscribe(success, error)
  }

  private buildFormGenerateTracking() {
    this.form = this.formBuilder.group({
      name: undefined,
      trackingName: undefined,
      domain: undefined,
      utmCampaign: undefined,
      utmAdset: undefined,
      utmAds: undefined,
      utmAgent: undefined,
      utmMedium: undefined,
      utmSource: undefined,
      utmTeam: undefined,
      createdById: undefined
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
