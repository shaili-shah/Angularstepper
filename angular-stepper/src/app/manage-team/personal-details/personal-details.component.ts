import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetailFormGroup!: FormGroup;
  today = new Date();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetailFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get f() {
    return this.personalDetailFormGroup.controls;
  }

}
