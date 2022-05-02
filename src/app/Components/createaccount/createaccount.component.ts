import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccount } from '../../Models/CreateAccount';
import { SexeType } from '../../Models/SexeType';
import { UserService } from '../../Services/User/user.service';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router) { }

  createaccount: CreateAccount;
  sexeType = SexeType;

  msg = '';
  form: any = {};
  Keys(): Array<string> {
    const Keys = Object.keys(this.sexeType);
    return Keys;
  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  addUser() {
    // tslint:disable-next-line:max-line-length
    this.createaccount = new CreateAccount(this.form.username, this.form.lastNameUser, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.role);
    this.userservice.addUser(this.createaccount).subscribe(
      data => {
        console.log(data);
        this.msg = 'User Added Succefully !';
        this.form = '';
      },
      error => {
        console.log('exception occured');
        this.msg = 'Email or Username Alredy Exist !';
      }
    );
  }
}
