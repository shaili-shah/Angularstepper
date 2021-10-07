import { Component, ViewChild } from '@angular/core';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent {

  @ViewChild('PersonalDetailComponent') personalDetailComponent!: PersonalDetailsComponent;
  @ViewChild('BankDetailComponent') bankDetailComponent!: BankDetailComponent;
  @ViewChild('ProfessionalDetailsComponent') professionalDetailsComponent! : ProfessionalDetailsComponent


  get personalDetailForm() {
    return this.personalDetailComponent ? this.personalDetailComponent.personalDetailFormGroup : this.personalDetailComponent;
  }

  get bankDetailForm() {
    return this.bankDetailComponent ? this.bankDetailComponent.bankDetailFormGroup : this.bankDetailComponent;
  }

  get professionalDetailForm(){
    return this.professionalDetailsComponent ? this.professionalDetailsComponent.professionalDetailFormGroup : this.professionalDetailsComponent;
  }


  constructor() { }

}
