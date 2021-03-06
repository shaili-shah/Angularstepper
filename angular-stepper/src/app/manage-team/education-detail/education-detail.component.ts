import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  imageBase64!: string;
  errors: any;
  model: any;
  today = new Date();
  @Input() empForm!: any

  @Output("addEducationDetail") addEducationDetail = new EventEmitter();
  @Output("removeEducationDetail") removeEducationDetail = new EventEmitter();

  constructor(private service: TeamService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get f() {
    return this.empForm.controls.educationDetailFormGroup.controls.educationDetail;
  }

  submit() {

    this.model = this.empForm.value as EmployeeModel;
    this.imageBase64 = this.service.data;
   
    const detailId = this.route.snapshot.paramMap.get('id') || 0;
    const id: number = +detailId;

    if (id > 0) {
      this.service.GetTeamDetailById(id).subscribe(data => {
        let editObj: EmployeeModel = {
          Id: data.Id,
          FirstName: this.model.personalDetailFormGroup.firstName,
          LastName: this.model.personalDetailFormGroup.lastName,
          BirthDate: this.model.personalDetailFormGroup.birthDate,
          Phone: this.model.personalDetailFormGroup.phone,
          Email: this.model.personalDetailFormGroup.email,
          FileId: 0,
          FileModel: {
            Id: 0,
            Name: this.model.personalDetailFormGroup.image?.name ?? "",
            ContentType: this.model.personalDetailFormGroup.image?.type ?? "",
            Data: this.service.data ?? ""
          },

          BankDetailId: data.BankDetailId,
          IFSC: this.model.bankDetailFormGroup.IFSC,
          AccountNo: this.model.bankDetailFormGroup.AccountNo,
          PanCardNo: this.model.bankDetailFormGroup.PanCardNo,
          AadharCardNo: this.model.bankDetailFormGroup.AadharCardNo,

          ProfessionalDetailId: data.ProfessionalDetailId,
          Year: this.model.professionalDetailFormGroup.year,
          Month: this.model.professionalDetailFormGroup.month,
          SkillIds: this.model.professionalDetailFormGroup.skillIds,
          LstSkills: [],

          ResumeFileId: 0,
          ResumeFileModel: {
            Id: 0,
            Name: this.model.professionalDetailFormGroup.resume?.name ?? "",
            ContentType: this.model.professionalDetailFormGroup.resume?.ContentType ?? "",
            Data: this.service.resume ?? ""
          },
          CurrentStatusId: data.CurrentStatusId,
          Company: this.model.currentStatusFormGroup.Company,
          Designation: this.model.currentStatusFormGroup.Designation,
          Department: this.model.currentStatusFormGroup.Department,
          CTC: this.model.currentStatusFormGroup.CTC,
          WorkingFrom: this.model.currentStatusFormGroup.WorkingFrom,
          LstExprienceDetailModel: this.model.experienceDetailFormGroup.experienceDetail,
          LstEducationDetailModel: this.model.educationDetailFormGroup.educationDetail

        };
        editObj.LstExprienceDetailModel.forEach(function(value){
          value.DetailId = data.Id;
        })
        editObj.LstEducationDetailModel.forEach(function(value){
          value.DetailId = data.Id;
        })
       
        this.service.EditEmployeeDetail(editObj).subscribe((data: any) => {
         
          if (data.m_Item2) {
            alert('Employee Updated successfully');
            this.router.navigate(['/teamDetail']);
          } else {
            alert('Update Employee Failed!');
          }
        }, error => {
          console.log(error);
          this.errors = error
        });


      });

    }
    if (id == 0) {
      
      let obj: EmployeeModel = {
        Id: 0,
        FirstName: this.model.personalDetailFormGroup.firstName,
        LastName: this.model.personalDetailFormGroup.lastName,
        BirthDate: this.model.personalDetailFormGroup.birthDate,
        Phone: this.model.personalDetailFormGroup.phone,
        Email: this.model.personalDetailFormGroup.email,
        FileId: 0,
        FileModel: {
          Id: 0,
          Name: this.model.personalDetailFormGroup.image?.name ?? "",
          ContentType: this.model.personalDetailFormGroup.image?.type ?? "",
          Data: this.service.data ?? ""
        },

        BankDetailId: 0,
        IFSC: this.model.bankDetailFormGroup.IFSC,
        AccountNo: this.model.bankDetailFormGroup.AccountNo,
        PanCardNo: this.model.bankDetailFormGroup.PanCardNo,
        AadharCardNo: this.model.bankDetailFormGroup.AadharCardNo,

        ProfessionalDetailId: 0,
        Year: this.model.professionalDetailFormGroup.year,
        Month: this.model.professionalDetailFormGroup.month,
        SkillIds: this.model.professionalDetailFormGroup.skillIds,
        LstSkills: [],

        ResumeFileId: 0,
        ResumeFileModel: {
          Id: 0,
          Name: this.model.professionalDetailFormGroup.resume?.name ?? "",
          ContentType: this.model.professionalDetailFormGroup.resume?.ContentType ?? "",
          Data: this.service.resume ?? ""
        },
        CurrentStatusId: 0,
        Company: this.model.currentStatusFormGroup.Company,
        Designation: this.model.currentStatusFormGroup.Designation,
        Department: this.model.currentStatusFormGroup.Department,
        CTC: this.model.currentStatusFormGroup.CTC,
        WorkingFrom: this.model.currentStatusFormGroup.WorkingFrom,
        LstExprienceDetailModel: this.model.experienceDetailFormGroup.experienceDetail,
        LstEducationDetailModel: this.model.educationDetailFormGroup.educationDetail
      };
      if(obj.LstExprienceDetailModel.length > 0){
        obj.LstExprienceDetailModel.forEach(function (value) {
          value.DetailId = 0;
          });
      }
      if(obj.LstEducationDetailModel.length > 0){
        obj.LstEducationDetailModel.forEach(function (value) {
          value.DetailId = 0;
          });
      }
    
      this.service.AddEmployeeDetail(obj).subscribe((data: any) => {
        if (data.m_Item2) {
          alert('Employee Added successfully');
          this.router.navigate(['/teamDetail']);
        } else {
          alert('Add Employee Failed!');
        }
      }, error => {
        console.log(error);
        this.errors = error
      });
    }

  }

}
