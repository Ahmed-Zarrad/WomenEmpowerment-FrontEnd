import { Offer } from '../../Models/offer';
import { OfferService } from '../../Services/Offre/Offre.service';
import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../Models/Candidat';
import { CandidatService } from '../../Services/Candidat/Candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  offer: Offer = new Offer('',0,'',new Date());
  constructor(private offerService: OfferService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveOffer(){
    this.offerService.createOffer(this.offer).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.offer);
    this.saveOffer();
  }
}
