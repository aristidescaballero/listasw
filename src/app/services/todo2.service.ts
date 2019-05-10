import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService2 {
  private todosCollection: AngularFirestoreCollection<TaskI>;
  private todos2: Observable<TaskI[]>;
  constructor(db:AngularFirestore) {
    this.todosCollection=db.collection<TaskI>('todos');
    this.todos2 = this.todosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
   }

   getTodos2(){
     return this.todos2;
   }

  
   regTodo(id: string){
     var fechaActual = new Date();
     var fecha = fechaActual.getDate()+"-"+(fechaActual.getMonth()+1)+"-"+fechaActual.getFullYear();
      
     console.log(id+fecha);

    //return this.todosCollection.doc(id).delete();
  }
}
