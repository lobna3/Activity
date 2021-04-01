import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  id: number;
  data:Activity;
  constructor(public apiService: ApiService, public router:Router,
    public activateRoute: ActivatedRoute) {
      this.data = new Activity();
     }

  ngOnInit() {
    this.id= this.activateRoute.snapshot.params["id"];
    this.apiService.trouverActivity_ID(this.id).subscribe(response =>{
      console.log(response);
      this.data=response;
    })
  }
  update(){
    this.apiService.updateActivity(this.id,this.data).subscribe(response => {
      this.router.navigate(['tabs/tab2']);
    })
 }

}
