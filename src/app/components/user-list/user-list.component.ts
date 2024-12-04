import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:User[]=[]; //VARIABLE:users
  userForm:FormGroup;
  currentUserId?:number;
  editMode:boolean =false;
  constructor(private userService: UserService, private fb: FormBuilder){
    this.userForm=this.fb.group({
      name:[''],
      email:['']
    });
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

  editUser(user: any){
    this.currentUserId=user.id;
    this.userForm.patchValue(user);
    console.log(this.currentUserId);
    this.editMode=true;
  }

  deleteUser(id: number){
    
  }

  onSubmit(){
    console.log("onSubmit()",this.userForm.value);
    if(this.editMode && this.currentUserId){
      this.userService.updateUser(this.currentUserId,this.userForm.value).subscribe(()=>{
        this.loadUsers();
        this.resetForm();
      })
    }
  }

  resetForm(){
    this.userForm.reset();
  }
}
