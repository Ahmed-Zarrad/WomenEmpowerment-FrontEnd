import { Cagnotte } from 'src/app/Models/Cagnotte';
import { Component, OnInit } from '@angular/core';
import { CagnotteService } from 'src/app/Services/Cagnotte/cagnotte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cagnotte',
  templateUrl: './create-cagnotte.component.html',
  styleUrls: ['./create-cagnotte.component.css']
})
export class CreateCagnotteComponent implements OnInit {

  cagnottes: Cagnotte = new Cagnotte();
  submitted = false;

  constructor(private cagnotteService: CagnotteService,
    private router: Router) { }

  ngOnInit() {
  }

  newCagnotte(): void {
    this.submitted = false;
    this.cagnottes = new Cagnotte();
  }

  save() {
    this.cagnotteService
    .addcagnotte(this.cagnottes).subscribe(data => {
      console.log(data)
      this.cagnottes = new Cagnotte();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/administrator/cagnottes']);
  }
}
