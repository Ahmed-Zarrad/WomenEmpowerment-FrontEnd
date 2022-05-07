import { Component, OnInit } from '@angular/core';
import { Subject } from '../../Models/Subject';
import { SubjectService } from '../../Services/Subject/subject.service';
import {UserService} from '../../Services/User/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-statistic-administrator',
  templateUrl: './statistic-administrator.component.html',
  styleUrls: ['./statistic-administrator.component.css']
})
export class StatisticAdministratorComponent implements OnInit {
  subject: Subject;
  numi: number;
  constructor(private subjectservice: SubjectService, private userService: UserService,  private router: Router) { }


  ngOnInit(): void {
    this.userService.retrieveClientByCount().subscribe(num => {console.log(num);
                                                               this.numi = num;
    });
alert(this.numi);
  }

  getsubjectstars() {
    this.subjectservice.getMaxStrasSubject().subscribe(
      data => { console.log(data) });
  }
}
