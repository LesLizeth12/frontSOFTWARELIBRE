import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:User[]=[]; //VARIABLE:users
  constructor(private userService: UserService){
  }
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void{
    this.userService.getUsers().subscribe( //subscribe:PARA RESPUESTAS ASINCRONAS
      (response)=>this.users=response,
      (error)=>console.error("error en el loading",error)
    )
  }
}
