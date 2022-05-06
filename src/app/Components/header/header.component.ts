// @ts-ignore
// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TokenstorageService } from '../../Services/TokenStorage/tokenstorage.service';
import { UserService } from '../../Services/User/user.service';
import { BasketService } from 'src/app/Services/Basket/basket.service';
import {User} from '../../Models/User';
import {AuthenticationService} from '../../Services/Authenticate/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public fileName = '/assets/images/placeholder.png';
  user: string = localStorage.getItem('AuthUsername');
  NotConnected = true;
  Client: boolean;
  Admin: boolean;
  u: User;



  // tslint:disable-next-line:max-line-length
  constructor(public authService: AuthenticationService, private userservice: UserService, private tokenstorage: TokenstorageService, private router: Router, public translate: TranslateService, private CartService: BasketService) {
  }


  ngOnInit(): void {
    this.userservice.getImage.subscribe(img => this.fileName = img);
    if (localStorage.getItem('AuthAuthorities').includes('ADMINISTRATOR')) {
      this.Admin = true;
      this.Client = false;
      this.NotConnected = false;
      this.userservice.getByUsernameUser(this.user).subscribe(
        response => {
          this.u = response;
          this.userservice.getImage.next(this.u.fileName);
        });

    }
    if (localStorage.getItem('AuthAuthorities').includes('CLIENT')) {
      this.Client = true;
      this.Admin = false;
      this.NotConnected = false;
      this.userservice.getByUsernameUser(this.user).subscribe(
        response => {
          this.u = response;
          this.userservice.getImage.next(this.u.fileName);
        });

    }

    if (localStorage.getItem('AuthAuthorities').includes(null)) {
      this.Client = false;
      this.Admin = false;
      this.NotConnected = true;
    }
  }
}
