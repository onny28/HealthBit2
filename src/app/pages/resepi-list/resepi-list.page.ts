import { Component, OnInit } from '@angular/core';
import { ResepiService, Resepi } from '../../services/resepi.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-resepi-list',
  templateUrl: './resepi-list.page.html',
  styleUrls: ['./resepi-list.page.scss'],
})
export class ResepiListPage implements OnInit {

  
  private resepis: Observable<Resepi[]>;
 
  constructor(private resepiService: ResepiService) { }
 
  ngOnInit() {
    this.resepis = this.resepiService.getIdeas();
  }
}
