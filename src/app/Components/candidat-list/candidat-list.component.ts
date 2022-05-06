import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../Models/Candidat'
import { CandidatService } from '../../Services/Candidat/Candidat.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {

  candidats: Candidat[];

  constructor(private candidatService: CandidatService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCandidats();
  }

  private getCandidats(){
    this.candidatService.getCandidatsList().subscribe(data => {
      this.candidats = data;
    });
  }

  candidatDetails(id: number){
    this.router.navigate(['candidat-details', id]);
  }

  updateCandidat(id: number){
    this.router.navigate(['update-candidat', id]);
  }

  deleteEmployee(id: number){
    this.candidatService.deleteCandidat(id).subscribe( data => {
      console.log(data);
      this.getCandidats();
    })
  }
}
