import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/task.interface';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  todo: TaskI={
    ncontrol:'',
    nombre:'',
    apellidos:''
  };
  todoId=null;

  constructor(
    private route: ActivatedRoute, private nav:NavController,
    private todoService: TodoService, private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if(this.todoId){
      this.loadTodo();
    }
     
  }
  async loadTodo(){
    const loading=await this.loadingController.create({
      message:'Cargando...'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res=>{
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo(){
    const loading=await this.loadingController.create({
      message:'Guardando...'
    });
    await loading.present();
    if(this.todoId){
      //Update
      this.todoService.updateTodo(this.todo, this.todoId).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('tabs/tab2');
      });
    }else{
      //add
      this.todoService.addTodo(this.todo).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('tabs/tab2');
      });
    }
  }

  onRemove(idTodo: string){
    this.todoService.removeTodo(idTodo);
  }

}
