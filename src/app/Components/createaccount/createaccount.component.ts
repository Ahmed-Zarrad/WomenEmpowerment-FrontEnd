import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAccount } from '../../Models/CreateAccount';
import { SexeType } from '../../Models/SexeType';
import { UserService } from '../../Services/User/user.service';
import {Observable} from 'rxjs';
import {User} from '../../Models/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  registrationFormGroup: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  downloadURL: Observable<string>;
  firebaseLink: string;
  // tslint:disable-next-line:max-line-length
  constructor(private userservice: UserService, private router: Router, private storage: AngularFireStorage) { }

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
    this.createaccount = new CreateAccount(this.form.username, this.form.lastNameUser, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.role, this.form.fileName);
    if (this.form.fileName) {
      this.userservice.getImage.next(this.form.fileName);
    }
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
  onFileChange(event): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.registrationFormGroup.patchValue({
          fileSource: reader.result
        });

      };

      const storageFile = event.target.files[0];
      const uuid = uuidv4();
      const filePath = `user/${this.form.username}/${uuid}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, storageFile);
      task.snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.firebaseLink = url;
                this.form.fileName = this.firebaseLink;
              }
            });

          })
        )
        .subscribe(url => {
          if (url) {
          }
        });

    }
  }

}
