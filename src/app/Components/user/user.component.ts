import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SexeType } from '../../Models/SexeType';
import { User } from '../../Models/User';
import { ZoneMap } from '../../Models/ZoneMap';
import { UserService } from '../../Services/User/user.service';
import {AddAdmin} from '../../Models/addAdmin';
import {finalize} from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ShowAllUsers: boolean;
  UpdateUser: boolean;
  DeleteUser: boolean;
  AddUsers: boolean;
  ShowUser: boolean;

  nameUser: string;
  registrationFormGroup: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  downloadURL: Observable<string>;
  firebaseLink: string;




  sexeType = SexeType;
  Keyss(): Array<string> {
    var Keys = Object.keys(this.sexeType);
    return Keys;
  }

  zoneType = ZoneMap;
  Keysz(): Array<string> {
    var Keys = Object.keys(this.zoneType);
    return Keys;
  }
  addAdmin: AddAdmin;
  us: AddAdmin;
  user: User;
  usere: User;
  userf: User[];
  ListUsers: User[];
  msg = '';
  form: any = {};
  forme: any = {};
  SexeUser: Observable<[SexeType]>;
  u: any = {};
  uu: Observable<User[]>;
  id: any;
  hideall: boolean;
  hidesearch: boolean = true;
  idUser: any;
  username: string;

  constructor(private route: ActivatedRoute, private userservice: UserService, private router: Router, private storage: AngularFireStorage) { }

  ngOnInit(): void {

  }
  addUser() {
    this.AddUsers = true;
    this.ShowAllUsers = false;
    this.ShowUser = false;
    // tslint:disable-next-line:max-line-length
    this.addAdmin = new AddAdmin(this.form.username, this.form.lastNameUser, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.stateUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.accountNonLoked, this.form.lockTime, this.form.resettoken, this.form.isBlocked, this.form.blockDate, this.form.unBlockDate, this.form.isPrivate, this.form.salaire, this.form.pointNumber, this.form.avilaibility, this.form.zone, this.form.role, this.form.fileName);
    if (this.form.fileName) {
      this.userservice.getImage.next(this.form.fileName);
    }
    this.userservice.ajouterUser(this.addAdmin).subscribe(
      data => {
        console.log(data);
        this.msg = 'Admin Added Succefully !';
        this.form = " ";
      },
      error => {
        console.log("exception occured");
        this.msg = 'Email or Username Alredy Exist !';
      }
    );
  }
  updateUser(us: AddAdmin) {

    this.UpdateUser = true;
    this.AddUsers = false;
    this.DeleteUser = false;
    this.ShowAllUsers = false;
    this.ShowUser = true;
    this.us = new AddAdmin(this.form.username, this.form.lastNameUser, this.form.cinUser, this.form.password, this.form.confirmPasswordUser, this.form.stateUser, this.form.phoneNumberUser, this.form.adressUser, this.form.birthDateUser, this.form.emailUser, this.form.sexeUser, this.form.accountNonLoked, this.form.lockTime, this.form.resettoken, this.form.isBlocked, this.form.blockDate, this.form.unBlockDate, this.form.isPrivate, this.form.salaire, this.form.pointNumber, this.form.avilaibility, this.form.zone, this.form.role, this.form.fileName);
    if (this.form.fileName) {
      this.userservice.getImage.next(this.form.fileName);
    }
    this.userservice.updateUser(us).subscribe(
      data => {
        console.log(data),
        this.msg = 'User Updated Succesfuly';
      },
      (error) => {
        console.log(error);
        this.msg = 'error';
      });
  }

  // tslint:disable-next-line:typedef
  deleteUser(idUser: number) {
    this.DeleteUser = false;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.ShowAllUsers = true;
    this.ShowUser = false;
    this.userservice.deleteUser(idUser).subscribe(
      data => {
        this.showAllUsers();
      },
      // tslint:disable-next-line:no-shadowed-variable
      error =>
        console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  showAllUsers() {
    this.ShowAllUsers = true;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.DeleteUser = false;
    this.ShowUser = false;
    this.userservice.getAllUser().subscribe(data => {
      this.ListUsers = data;
    },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  showUser(u: User) {
    this.DeleteUser = false;
    this.UpdateUser = false;
    this.AddUsers = false;
    this.ShowAllUsers = false;
    this.ShowUser = true;
    this.user = u;
  }

  getUserByName(nu: any) {
    this.hideall = true;
    this.hidesearch = false;
    this.userservice.getByUsernameUser(nu).subscribe(data => {
      this.user = data;
    });
  }


  Search() {
    // tslint:disable-next-line:triple-equals
    if (this.username != '') {


      this.ListUsers = this.ListUsers.filter(res => {
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      });
    }
    // tslint:disable-next-line:triple-equals
    else if (this.username == '') {
      this.showAllUsers();
    }

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
