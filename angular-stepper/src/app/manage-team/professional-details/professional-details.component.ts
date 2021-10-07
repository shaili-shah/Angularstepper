import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  professionalDetailFormGroup! : FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.professionalDetailFormGroup = this.formBuilder.group({
      age: ['', Validators.required]
  });
  }

}
