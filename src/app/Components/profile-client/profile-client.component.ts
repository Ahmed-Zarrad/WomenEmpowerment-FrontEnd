import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/User/user.service';
import {User} from '../../Models/User';
import {AuthenticationService} from '../../Services/Authenticate/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {
  subject: [];
  thePageNumber = 0;
  thePageSize = 6;
  theTotalElements = 0;
  favIdList: number[];
  public fileName = '/assets/images/placeholder.png';
  user: string = localStorage.getItem('AuthUsername');
  NotConnected = true;
  Client: boolean;
  Admin: boolean;
  u: User;

  constructor(private userservice: UserService,
              private router: Router, public authService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.userservice.getImage.subscribe(img => this.fileName = img);
    if (localStorage.getItem('AuthAuthorities').includes('Client')) {
      this.Admin = false;
      this.Client = true;
      this.NotConnected = false;
      this.userservice.getByUsernameUser(this.user).subscribe(
        response => {
          this.u = response;
          this.userservice.getImage.next(this.u.fileName);
          if (this.fileName == null){
            this.fileName = '/assets/images/placeholder.png';}

        });

    }
  }

  processResult() {
    return data => {
      this.subject = data.content;
      this.thePageNumber = data.number;
      this.thePageSize = data.size;
      this.theTotalElements = data.totalElements;
    };
  }
}
