import { FormGroup, FormBuilder } from '@angular/forms'
import { Component, OnInit, ViewChild, Output, Input } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap'
import { DomainService } from 'app/core/services/domain.service'
import { ToastrService } from 'ngx-toastr'
import { DataTableComponent } from 'app/core/base/data-table/data-table.component'

@Component({
  selector: 'app-domain-create',
  templateUrl: './domain-create.component.html',
  styleUrls: ['./domain-create.component.css']
})
export class DomainCreateComponent implements OnInit {

  @ViewChild('modal') modal: ModalDirective
  @Input() dataTable: DataTableComponent

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private domainService: DomainService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  show() {
    this.modal.show()
    this.buildForm()
  }

  hide() {
    this.modal.hide()
  }

  onSubmit() {
    const data = this.form.value
    const success = res => {
      this.toastr.success('Create new domain successfully')
      this.hide()
      this.dataTable.fetch()
    }
    const error = err => {
      this.toastr.error(err.message)
      this.hide()
    }
    this.domainService.create(data).subscribe(success, error)
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: undefined,
      address: undefined
    })
  }

}
