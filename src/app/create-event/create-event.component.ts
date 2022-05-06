import { CharityEventService } from 'src/app/Services/CharityEvent/charity-event.service';
import { CharityEvent } from 'src/app/Models/CharityEvent';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  charityEvents: CharityEvent = new CharityEvent();
  submitted = false;

  constructor(private charityEventService: CharityEventService,
    private router: Router) { }

  ngOnInit() {
  }

  newCagnotte(): void {
    this.submitted = false;
    this.charityEvents = new CharityEvent();
  }

  save() {
    this.charityEventService
    .ajouterCharityEvent(this.charityEvents).subscribe(data => {
      console.log(data)
      this.charityEvents = new CharityEvent();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/administrator/event']);
  }
}
