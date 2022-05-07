import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../Models/Candidat';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../../Services/Candidat/Candidat.service';

@Component({
  selector: 'app-candidat-details',
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css']
})
export class CandidatDetailsComponent implements OnInit {

  id: number
  candidat: Candidat
  constructor(private route: ActivatedRoute, private CandidatService: CandidatService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.candidat = new Candidat();
    this.CandidatService.getCandidatById(this.id).subscribe( data => {
      this.candidat = data;
    });
  }

}
