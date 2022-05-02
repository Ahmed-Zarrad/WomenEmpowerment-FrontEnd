import { OfferService } from '../../Services/Offre/Offre.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from '../../Models/offer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  current_date=new Date();
  offers: Offer[];



  constructor(private offerService: OfferService,private router: Router) { }

  ngOnInit(): void {
   // this.getOffers();
   console.log(this.current_date.toDateString());
   this.offers = [new Offer('software engineer',4000,'java',this.current_date),
   new Offer('backend developer',3000,'.net and C#',this.current_date),
   new Offer('frontEnd developer',2000,'Angular',this.current_date)];

  }
  private getOffers(){
    this.offerService.getOffersList().subscribe(data => {
      this.offers = data;

    })
  }

  offerDetails(id:number) {
    this.router.navigate(['offer-details',id]);
  }

}
