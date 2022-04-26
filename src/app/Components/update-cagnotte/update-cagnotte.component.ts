import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cagnotte } from 'src/app/Models/Cagnotte';
import { CagnotteService } from 'src/app/Services/Cagnotte/cagnotte.service';
import {Promise} from 'es6-promise'
@Component({
  selector: 'app-update-cagnotte',
  templateUrl: './update-cagnotte.component.html',
  styleUrls: ['./update-cagnotte.component.css']
})
export class UpdateCagnotteComponent implements OnInit {

  idCagnotte: number;
  cagnotte: Cagnotte;

  constructor(private route: ActivatedRoute,private router: Router,
    private cagnotteService: CagnotteService) { }

  ngOnInit() {
    this.cagnotte = new Cagnotte();

    this.idCagnotte = this.route.snapshot.params['idCagnotte'];

    this.cagnotteService.getCagnotte_by_ID(this.idCagnotte)
      .subscribe((data:any) => {
        console.log(data)
       this.cagnotte=data;
      }, error => console.log(error));
  }

  updateCagnotte() {
    this.cagnotteService.updateCagnotte(this.idCagnotte,this.cagnotte)
      .subscribe((data:any) => {
        console.log("datttttttttttttttttttttt",data);
        this.cagnotte = new Cagnotte();
        console.log("datttttttttttttttttttttt",data);
        this.gotoList();
        console.log("datttttttttttttttttttttt",data);
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCagnotte();
  }

  // gotoList(idCagnotte:number):void {
  //   this.router.navigate(['/administrator/cagnottes',idCagnotte]);
  // }

  gotoList() {
    this.router.navigate(['/administrator/cagnottes']);
  }
}
