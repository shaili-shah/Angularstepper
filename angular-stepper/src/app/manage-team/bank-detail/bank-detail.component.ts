import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

  bankDetailFormGroup! : FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.bankDetailFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
