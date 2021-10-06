export interface TeamGridModel {
  Id?: number;
  FirstName : string;
  LastName : string;
  Email : string;
  CurrentStatus : CurrentStatus[]
} 

interface CurrentStatus{
    Department : string;
    Designation : string;
}