import { CharityEventService } from 'src/app/Services/CharityEvent/charity-event.service';
import { CharityEvent } from 'src/app/Models/CharityEvent';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  idEvent: number;
  charityEvents: CharityEvent;

  constructor(private route: ActivatedRoute,private router: Router,
    private CharityEvent: CharityEventService) { }

  ngOnInit() {


  }

}
