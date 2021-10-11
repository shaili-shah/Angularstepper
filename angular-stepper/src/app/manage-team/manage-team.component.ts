import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

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
        skillIds: ['']
      })

    })
  }

 
}
