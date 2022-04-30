import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginUser } from '../pages/interfaces/login.interface';
import { User } from '../pages/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl:string = 'http://localhost:3000';
  private apiKey:string = 'asd6a5Adasd3SDG2FGER56sd2ds62';

  constructor(private http:HttpClient) { }

  addUser(objeto:User):Observable<User>{
    const url = `${this.apiUrl}/${this.apiKey}/addUser`;
    return this.http.post<User>(url, objeto);
  }

  logUserByEmail(correo:string, password:string){
    const url = `${this.apiUrl}/${this.apiKey}/logUserByEmail/${correo}/${password}`;
    return this.http.get(url);
  }
  logUserByPhone(phone:string, password:string){
    const url = `${this.apiUrl}/${this.apiKey}/logUserByPhone/${phone}/${password}`;
    return this.http.get(url);
  }
}
