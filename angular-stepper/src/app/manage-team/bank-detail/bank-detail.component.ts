import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

  @Input('empForm') empForm! : any;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){
    return this.empForm.controls.bankDetailFormGroup.controls;
  }

}
