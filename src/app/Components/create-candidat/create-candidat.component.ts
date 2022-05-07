import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../Models/Candidat';
import { CandidatService } from '../../Services/Candidat/Candidat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-candidat',
  templateUrl: './create-candidat.component.html',
  styleUrls: ['./create-candidat.component.css']
})
export class CreateCandidatComponent implements OnInit {

  candidat: Candidat = new Candidat();
  constructor(private candidatService: CandidatService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCandidat(){
    this.candidatService.createCandidat(this.candidat).subscribe( data =>{
      console.log(data);
      this.goToCandidatList();
    },
    error => console.log(error));
  }

  goToCandidatList(){
    this.router.navigate(['/candidats']);
  }

  onSubmit(){
    console.log(this.candidat);
    this.saveCandidat();
  }
}
