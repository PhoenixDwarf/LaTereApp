import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User, CompleteUser, CompleteUserWithSecurityq, UpdateSecurity, ChangePass, GetSecurity } from '../tab1/pages/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl:string = 'https://latereapi.herokuapp.com';
  private apiKey:string = 'asd6a5Adasd3SDG2FGER56sd2ds62';

  constructor(private http:HttpClient) { }

  addUser(objeto:User):Observable<User>{
    const url = `${this.apiUrl}/${this.apiKey}/addUser`;
    return this.http.post<User>(url, objeto);
  }

  logUserByEmail(correo:string, password:string){
    const url = `${this.apiUrl}/${this.apiKey}/logUserByEmail/${correo}/${password}`;
    return this.http.get<CompleteUser>(url);
  }
  logUserByPhone(phone:string, password:string){
    const url = `${this.apiUrl}/${this.apiKey}/logUserByPhone/${phone}/${password}`;
    return this.http.get<CompleteUser>(url);
  }

  updateUser(objeto:User, id:number):Observable<User>{
    const url = `${this.apiUrl}/${this.apiKey}/updateUser${id}`;
    return this.http.put<User>(url, objeto);
  }

  findUser(id:number):Observable<CompleteUserWithSecurityq>{
    const url = `${this.apiUrl}/${this.apiKey}/searchID${id}`;
    return this.http.get<CompleteUserWithSecurityq>(url);
  }

  updateSecurityQuestion(objeto:UpdateSecurity, id:number):Observable<UpdateSecurity>{
    const url = `${this.apiUrl}/${this.apiKey}/updateSecurityQuestion${id}`;
    return this.http.put<UpdateSecurity>(url, objeto);
  }

  changePass(objeto:ChangePass, id:number):Observable<ChangePass>{
    const url = `${this.apiUrl}/${this.apiKey}/changePass${id}`;
    return this.http.put<ChangePass>(url, objeto);
  }

  getSecurityQuestionByEmail(correo:string){
    const url = `${this.apiUrl}/${this.apiKey}/getSecurityQuestionByEmail/${correo}`;
    return this.http.get<GetSecurity>(url);
  }

  getSecurityQuestionByPhone(phone:string){
    const url = `${this.apiUrl}/${this.apiKey}/getSecurityQuestionByPhone/${phone}`;
    return this.http.get<GetSecurity>(url);
  }

}
