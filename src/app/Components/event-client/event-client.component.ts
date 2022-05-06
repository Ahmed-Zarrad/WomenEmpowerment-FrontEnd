import { Component, OnInit } from '@angular/core';
import { CharityEventService } from 'src/app/Services/CharityEvent/charity-event.service';
import { CharityEvent } from 'src/app/Models/CharityEvent';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-client',
  templateUrl: './event-client.component.html',
  styleUrls: ['./event-client.component.css']
})
export class EventClientComponent implements OnInit {
  charityevents: Observable<CharityEvent[]>;

  constructor(private charityEventService: CharityEventService,
    private router: Router) {


    }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.charityevents = this.charityEventService.retrieveallEvent();
  }

  deleteEvent(idEvent: number) {
    this.charityEventService.deleteEvent(idEvent)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  updateEvent(idEvent: number){
    this.router.navigate(['/administrator/event/update', idEvent]);
  }
}
