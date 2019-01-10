import { ToastrService } from 'ngx-toastr'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { AccountService } from 'app/core/services/account.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm()
  }

  onSubmit() {
    const value = this.form.value
    if (value.password.length < 6 || value.password) {
      this.toastr.error('Password is required and the minimum length is 6')
    }
    if (value.confirmPassword.length < 6 || value.confirmPassword) {
      this.toastr.error('Confirm password is required and the minimum length is 6')
    }
    if (value.password !== value.confirmPassword) {
      this.toastr.error('Password and password must be the same')
    } else {
      const success = res => {
        this.router.navigate(['/account/account-list'])
        this.toastr.success('Create an account successfully')
      }
      const error = err => {
        this.toastr.error(err.message)
      }
      this.accountService.create(value).subscribe(success, error)
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: undefined,
      phoneNumber: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined
    })
  }

}
