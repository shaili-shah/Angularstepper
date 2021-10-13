import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {

  employeeForm!: FormGroup

  constructor(private formBuilder: FormBuilder , 
    private service : TeamService ,
    private route : ActivatedRoute ) { }

  ngOnInit(): void {

    const detailId  = this.route.snapshot.paramMap.get('id') || 0 ;
    const id : number = +detailId;
    this.service.GetTeamDetailById(id);

    this.employeeForm = this.formBuilder.group({

      personalDetailFormGroup: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        image: ['']
      }),

      bankDetailFormGroup: this.formBuilder.group({
        AadharCardNo: ['', Validators.required],
        AccountNo: ['', Validators.required],
        IFSC: ['', Validators.required],
        PanCardNo: ['', Validators.required]
      }),

      professionalDetailFormGroup: this.formBuilder.group({
        month: [''],
        year: [''],
        skillIds: [''],
        resume: ['']
      }),

      currentStatusFormGroup: this.formBuilder.group({
        CTC: [''],
        Company: ['', Validators.required],
        Department: ['', Validators.required],
        Designation: ['', Validators.required],
        WorkingFrom: ['', Validators.required]
      }),

      experienceDetailFormGroup: this.formBuilder.group({
        experienceDetail: this.formBuilder.array([])
      }),

      educationDetailFormGroup : this.formBuilder.group({
        educationDetail : this.formBuilder.array([])
      })

    })
  }

  experienceDetailFn(): FormArray {
    return this.employeeForm.get('experienceDetailFormGroup')?.get('experienceDetail') as FormArray
  }

  newExperienceDetail(): FormGroup {
    return this.formBuilder.group({
      Company: ['', Validators.required],
      Department: [''],
      Designation: [''],
      From: [''],
      To : [''],
      CTC: ['']
    })
  }

  addExperienceDetail() {
    this.experienceDetailFn().push(this.newExperienceDetail());
  }

  removeExperienceDetail(i:number) {
    this.experienceDetailFn().removeAt(i);
  }

  educationDetail() : FormArray{
    return this.employeeForm.get('educationDetailFormGroup')?.get('educationDetail') as FormArray
  }

  newEducationDetail() : FormGroup{
    return this.formBuilder.group({
      Course : ['',Validators.required],
      University : [''],
      PassedOn : [''],
      Grade : ['']
    })
  }

  addEducationDetail(){
    this.educationDetail().push(this.newEducationDetail());
  }

  removeEducationDetail(i : number){
    this.educationDetail().removeAt(i);
  }

 

}
