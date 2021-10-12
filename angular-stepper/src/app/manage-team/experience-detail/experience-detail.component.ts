import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  @Input('empForm') empForm : any;

  @Output("addExperienceDetail") addExperienceDetail = new EventEmitter();
  @Output("removeExperienceDetail") removeExperienceDetail = new EventEmitter();
  
  today =  new Date();

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.empForm.controls.experienceDetailFormGroup.controls.experienceDetail;
  }

}
