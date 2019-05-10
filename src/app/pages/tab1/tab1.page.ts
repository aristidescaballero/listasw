import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { TodoService2 } from '../../services/todo2.service';

import { ListaI } from '../../models/lista.interface';
import { TodoServiceL } from '../../services/listapase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
   todos2: TaskI[];
   listaP: any={};
   
  constructor(private todoService2: TodoService2, private todoServiceL: TodoServiceL) {
    
   }

  ngOnInit() {
    this.todoService2.getTodos2().subscribe(res=>{
      //console.log('Tareas', res);
      this.todos2 = res;
    });
  }

    onReg(idTodo: string){
    var fechaActual = new Date();
     var fecha = fechaActual.getDate()+"-"+(fechaActual.getMonth()+1)+"-"+fechaActual.getFullYear();
     this.listaP.ncontrol=idTodo;
     this.listaP.fecha=fecha;
    this.todoServiceL.regTodo(this.listaP);
  }

}
