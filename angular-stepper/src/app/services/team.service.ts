import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService  {

  private baseUrl = environment.baseURL;

  constructor(public http : HttpClient) {
   }

   getAllEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + "/User/GetPersonalDetail");
  }

   
}
