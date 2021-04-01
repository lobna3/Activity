import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  ActivityData: any;
  constructor(public apiService: ApiService) {
         this.ActivityData=[];
  }

  ngOnInit() {
    this.affichertous();
  }

  affichertous(){
    this.apiService.afficherListe().subscribe(response=> {
      console.log(response);
      this.ActivityData=response;
    })
  }

  supprime(etudiant) {
    this.apiService.supprimerActivity(etudiant.id).subscribe(Response => {
      this.affichertous();
    });
  }

}
