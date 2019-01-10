import { ContactData } from 'types'
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap'

@Component({
  selector: 'app-contact-show-data',
  templateUrl: './contact-show-data.component.html',
  styleUrls: ['./contact-show-data.component.css']
})
export class ContactShowDataComponent implements OnInit {

  @ViewChild('modal') modal: ModalDirective
  contactDatas: ContactData[] = [] as ContactData[]

  constructor() { }

  ngOnInit() {
  }

  show(fields: ContactData[]) {
    this.contactDatas = [] as ContactData[]
    this.contactDatas = fields
    this.modal.show()
  }

  hide() {
    this.modal.hide()
  }

}
