import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

  @Input('empForm') empForm! : any;
  //bankDetailFormGroup! : FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    // this.bankDetailFormGroup = this.formBuilder.group({
    //   AadharCardNo: ['', Validators.required],
    //   AccountNo : ['',Validators.required],
    //   IFSC : ['',Validators.required],
    //   PanCardNo : ['',Validators.required]
    // });
  }

  // get f(){
  //   return this.bankDetailFormGroup.controls;
  // }

  get f(){
    return this.empForm.controls.bankDetailFormGroup.controls;
  }

}
