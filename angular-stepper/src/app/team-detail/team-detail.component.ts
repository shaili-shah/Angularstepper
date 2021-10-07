import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeamGridModel } from '../Models/TeamGridModel';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})

export class TeamDetailComponent implements OnInit { 

  searchTerm!: string;
  page = 1;
  pageSize = 4;
  collectionSize!: number;
  employees!: TeamGridModel[];
  allEmployees!: TeamGridModel[];

  constructor(private http: HttpClient ,private service : TeamService) {
   }

  ngOnInit(): void {

    this.service.getAllEmployees()
      .subscribe((data) => {
       
        this.collectionSize = data.length;
       this.employees = data;
       console.log(this.employees);
       this.allEmployees = this.employees;
      });
  }

  search(value: any): void {
   let searchVal  = value.data || "";
    this.employees = this.allEmployees.filter((val) => val.FirstName.toLowerCase().includes(searchVal));
    this.collectionSize = this.employees.length;
  }

}
