export interface EmployeeModel {
    Id: number;
    FirstName : string;
    LastName : string;
    BirthDate : Date;
    Phone  : string;
    Email : string;
    FileId : number;
    FileModel : FileModel;
    BankDetailId : number;
    IFSC : string;
    AccountNo : string;
    PanCardNo : string;
    AadharCardNo : string;
    ProfessionalDetailId : number;
    Year : Number;
    Month : number;
    SkillIds : [];
    LstSkills : [];
    ResumeFileId : number;
    ResumeFileModel : FileModel;
    CurrentStatusId : number;
    Company : string;
    Designation : string;
    Department : string;
    CTC : string;
    WorkingFrom : Date;
    LstExprienceDetailModel : Array<ExprienceDetailModel>;
    LstEducationDetailModel : Array<EducationDetailModel>;
  } 

  interface FileModel{
    Id: number,
    Name: string,
    ContentType: string,
    Data: string
  }

  interface ExprienceDetailModel{
    Id : number;
    Company : string;
    Designation : string;
    Department : string;
    CTC : string;
    From : Date;
    To : Date;
    DetailId : number;
  }

  interface EducationDetailModel{
    Id : number;
    Course : string;
    University : string;
    PassedOn : Date;
    Grade : string;
    DetailId : number;
  }