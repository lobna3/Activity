import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public folder: string;
  produitList: Observable<Activity[]>;
  constructor(private activatedRoute: ActivatedRoute,
    produitService: ApiService) {
      this.produitList = produitService.getActivities();
    }

    ngOnInit() {
      this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

}
