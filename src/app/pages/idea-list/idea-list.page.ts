import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../../services/idea.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {

private ideas: Observable<Idea[]>;
public filterText: string;
// idea: Idea ={
//   name:'',
//   notes: '',
//   ingredients: [{
//     name: '',
//     price: null
//   }],
//   steps: ''
// }
idea: Idea[] = [];
 
  constructor(private ideaService: IdeaService, private firestore:AngularFirestore) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();

   
     
  //   this.firestore.collection('recipe').valueChanges()
  //   .subscribe(ideaList => {
  //     this.ideaList = ideaList;
  //     this.loadedIdeaList = ideaList;
  // });
  }

  getItems(){
    var val = this.filterText;
  
    if (val && val.trim() != ""){
      this.ideaService.getIdeas().subscribe(p => {
        this.idea = p.filter(idea => {
          return idea.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
      });
    } else {
      this.ideaService.getIdeas().subscribe(p =>{
        this.idea = p;
      });
    }
  }

  // filter(value: string): Observable<Idea[]> {
  //   return this.idea.map( idea => )
  // }

  // initializeItems(): void {
  //   this.ideaList = this.loadedIdeaList;
  // }

//   filterList(evt) {
    
  
//     const searchTerm = evt.srcElement.value;
  
//     if (!searchTerm) {
//       return;
//     }
  
//     this.ideas= this.ideas.filter(idea => {
//       if (idea.name && searchTerm) {
//         if (idea.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
//           return true;
//         }
//         return false;
//       }
//     });
// }
}
