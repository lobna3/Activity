import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data:Activity
  constructor(public apiService: ApiService, public router:Router) {
    this.data = new Activity();
  }

  submitForm(){
    this.apiService.creerActivity(this.data).subscribe((response) =>{
      this.router.navigate(['/tabs/tab2'])
    });
  }

}
