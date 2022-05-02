import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../../Services/Candidat/Candidat.service';
import { Candidat } from '../../Models/Candidat';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {

  id: number;
  employee: Candidat = new Candidat();
  constructor(private CandidatService: CandidatService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.CandidatService.getCandidatById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.CandidatService.updateCandidat(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
