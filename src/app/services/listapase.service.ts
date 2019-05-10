import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListaI } from '../models/lista.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceL {
  private todosCollectionL: AngularFirestoreCollection<ListaI>;
  private listat: Observable<ListaI[]>;
  constructor(db:AngularFirestore) {
    this.todosCollectionL=db.collection<ListaI>('lista');
    this.listat = this.todosCollectionL.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
   }

   
   regTodo(listap){

    
     
      //console.log(listap);
       // console.log(this.todosCollectionL);
      this.listat.subscribe(val=>val);
      
    //console.log(this.listat);
    //return this.todosCollectionL.add(listap);
   

    
  }
}
