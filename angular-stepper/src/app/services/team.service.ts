import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from '../Models/EmployeeModel';


const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable({
  providedIn: 'root'
})

export class TeamService  {

  private baseUrl = environment.baseURL;

  constructor(public http : HttpClient) {
   }

   imageBase64! : string;
   resumeBase64! : string;

   get data(): any{
    return this.imageBase64;
  }

  set data(val: any){
    this.imageBase64 = val;
  }

  get resume(): any{
    return this.resumeBase64;
  }

  set resume(val: any){
    this.resumeBase64 = val;
  }

   getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/User/GetPersonalDetail`);
  }

  getAllSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/User/GetAllSkills`);
  }

  AddEmployeeDetail(model : EmployeeModel){
    return this.http.post(`${this.baseUrl}/User/AddTeamDetail`, model ,{headers: new HttpHeaders( 
      {
        'Content-Type': 'application/json'
      }
     )});
  }

  GetTeamDetailById(id : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/User/GetTeamDetailById`);
  }

   
}
