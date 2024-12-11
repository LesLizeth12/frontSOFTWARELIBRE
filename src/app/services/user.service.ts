import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root' //INYECTA LA DEPENDENCIA
})
export class UserService {

  private apiurl='http://localhost:3000/api/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiurl);
  }

  createUser(user:any):Observable<any>{
    return this.http.post<any>(this.apiurl,user);
  }

  updateUser(id:number,user:any):Observable<any>{
    return this.http.put(`${this.apiurl}/${id}`,user);
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
