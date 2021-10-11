import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css']
})
export class CurrentStatusComponent implements OnInit {

  @Input('empForm') empForm : any;
  company : string = "Albiorix Technology Private Limited";
  today = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.empForm.controls.currentStatusFormGroup.controls;
  }

}
