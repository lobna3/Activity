import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  produitDetail:  Observable<Activity>;
  constructor(produitservice : ApiService, activatedroute: ActivatedRoute) { 
    const PRODUITID = activatedroute.snapshot.params["activityID"];
    this.produitDetail = produitservice.getActivity(PRODUITID);
  }

  ngOnInit() {
  }

}
