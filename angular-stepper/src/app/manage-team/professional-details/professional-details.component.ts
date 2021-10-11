import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillModel } from 'src/app/Models/SkillModel';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  @Input('empForm') empForm! : any;
  private base64textString: String = "";

  file: File | null = null;
  
  skillList!: SkillModel[];
  professionalDetailFormGroup!: FormGroup

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.file = file;

    if (file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    this.empForm.get('professionalDetailFormGroup').value.resume  = file;
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  constructor(private formBuilder: FormBuilder, private service: TeamService) { }

  ngOnInit(): void {
    
    this.service.getAllSkills().subscribe(data => {
      this.skillList = data;
    });

  }

  submit(){
    console.log(this.empForm.controls);
  }


}
