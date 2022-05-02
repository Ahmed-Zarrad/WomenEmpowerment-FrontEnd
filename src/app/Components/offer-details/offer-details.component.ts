import { OfferService } from '../../Services/Offre/Offre.service';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../Models/offer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  id:number
  offer:Offer
  constructor(private route: ActivatedRoute, private OfferService: OfferService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offer = new Offer('',0,'',new Date());
    this.OfferService.getOfferById(this.id).subscribe(data => {
      this.offer = data;
    })
  }

}
