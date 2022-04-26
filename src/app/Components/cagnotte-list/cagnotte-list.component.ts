import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cagnotte } from 'src/app/Models/Cagnotte';
import { CagnotteService } from 'src/app/Services/Cagnotte/cagnotte.service';

@Component({
  selector: 'app-cagnotte-list',
  templateUrl: './cagnotte-list.component.html',
  styleUrls: ['./cagnotte-list.component.css']
})
export class CagnotteListComponent implements OnInit {
  cagnottes: Observable<Cagnotte[]>;

  constructor(private cagnotteService: CagnotteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.cagnottes = this.cagnotteService.getAllCagnotte();
  }

  deleteCagnotte(idCagnotte: number) {
    this.cagnotteService.deleteCagnotte(idCagnotte)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  updateCagnotte(idCagnotte: number){
    this.router.navigate(['/administrator/cagnottes/update', idCagnotte]);
  }
}
