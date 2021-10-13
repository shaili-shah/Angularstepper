import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { requiredFileType } from 'src/app/validators/requiredFileType';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input('empForm') empForm! : any;
  @Input('imageBase64') imageBase64  : string = "";
  private base64textString: String = "";

  public imagePath: any;
  imgURL: any;

  personalDetailFormGroup!: FormGroup;
  today = new Date();

  file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.file = file;

    let result = requiredFileType('png', this.file!);
    if (result?.requiredFileType) {
      this.empForm.get('personalDetailFormGroup').controls.image?.setErrors({ invalid: 'Invalid File' });
    }

    if (file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    this.empForm.get('personalDetailFormGroup').value.image  = file;
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.service.data  = this.base64textString

  }

  constructor(private host: ElementRef<HTMLInputElement>,
    private formBuilder: FormBuilder , private service : TeamService) { }

  ngOnInit(): void {
  }

  get f() {
    return this.empForm.controls.personalDetailFormGroup.controls;
  }

  preview(files: any) {
    if (files.length === 0) {
      this.imgURL = "";
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
