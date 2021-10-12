import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  model : any;
  today = new Date();
  @Input() empForm! : any

  @Output("addEducationDetail") addEducationDetail = new EventEmitter();
  @Output("removeEducationDetail") removeEducationDetail = new EventEmitter();

  constructor(private service : TeamService) { }

  ngOnInit(): void {
  }

  get f(){
    return this.empForm.controls.educationDetailFormGroup.controls.educationDetail;
  }
  
  submit(){
    this.model  = this.empForm.value as EmployeeModel;
    console.log(this.model);
      debugger;
    var values = JSON.stringify(this.model);
    this.service.AddEmployeeDetail(this.model).subscribe((data) => {
      console.log(data);
    });

  }

}
