import { SessionService } from 'app/core/services/session.service'
import { Component, OnInit } from '@angular/core'
import { Account } from 'types'

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  accountData: Account = {} as Account

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.accountData.email = this.sessionService.accountData.email
    this.accountData.fullNameAcronym = this.GetFullNameAcronym(this.sessionService.accountData.fullName)
    this.accountData.fullName = this.sessionService.accountData.fullName
  }

  private GetFullNameAcronym(fullName: string) {
    const lastNameAcronym = fullName.split(' ')[0].substring(0, 1)
    const firstNameAcronym = fullName.split(' ')[fullName.split(' ').length - 1].substring(0, 1)
    const result = lastNameAcronym + firstNameAcronym
    return result
  }

}
