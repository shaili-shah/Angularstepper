import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillModel } from 'src/app/Models/SkillModel';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  skillList!: SkillModel[];
  professionalDetailFormGroup!: FormGroup
  constructor(private formBuilder: FormBuilder, private service: TeamService) { }

  ngOnInit(): void {
    this.professionalDetailFormGroup = this.formBuilder.group({
      month: [''],
      year: [''],
      skillIds: ['']
    });

    this.service.getAllSkills().subscribe(data => {
      this.skillList = data;
    });

  }


}
