import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private url  = 'https://localhost:44376/User/getDetails'

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    
      let result = this.http.get<string>(this.url).subscribe(s => {
        console.log(s);
      });
   

  }

}
