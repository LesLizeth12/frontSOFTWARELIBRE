import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
const routes:Routes=[
    {path:'users',component:UserListComponent}, //NOMBRE A LLAMAR EN LA URL
    {path:'',redirectTo:'/users',pathMatch:'full'} 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}