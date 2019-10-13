import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Idea {
  id?: string,
  name: string,
  notes: string,
  steps: string,
  ingredients: Array<Ingredient>
  video: string;
  videos: Array<videos>
  calories: number;
}

interface Ingredient{
  name: string,
  price: number,
}

interface videos{
  name: string;
  filepath: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;
  
 
  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('recipe');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
 
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

 
  addIdea(idea: Idea): Promise<DocumentReference> {
    return this.ideaCollection.add(idea);
  }

  // addToDB(videos: Array<videos>): Promise<DocumentReference>
  // addToDB(idea: videos): Promise<void>{
  //   return this.ideaCollection.add();
  // }
 
  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes, steps: idea.steps, ingredients: idea.ingredients, calories: idea.calories,video: idea.video, videos: idea.videos});
  }
 
  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }

 

  
  
  // addVideostoDB(idea: Idea): Promise<DocumentReference>{
  //    return this.ideaCollection.add(idea.videos);
  // }

  // filterIdeas(searchTerm){
  //   return this.ideas.filter(idea => {
  //     return idea.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   })
  // }

 

  }

  
  

