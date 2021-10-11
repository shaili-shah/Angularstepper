import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit{

  employeeForm! : FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() : void{
    this.employeeForm = this.formBuilder.group({

      personalDetailFormGroup : this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        image: ['']
      }),

      bankDetailFormGroup : this.formBuilder.group({
        AadharCardNo: ['', Validators.required],
        AccountNo : ['',Validators.required],
        IFSC : ['',Validators.required],
        PanCardNo : ['',Validators.required]
      }),

      professionalDetailFormGroup : this.formBuilder.group({
        month: [''],
        year: [''],
        skillIds: [''],
        resume : ['']
      }),

      currentStatusFormGroup : this.formBuilder.group({
        CTC : [''],
        Company : ['',Validators.required],
        Department : ['',Validators.required],
        Designation : ['',Validators.required],
        WorkingFrom : ['',Validators.required]
      })

    })
  }

 
}
