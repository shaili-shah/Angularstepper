import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'stepper-footer',
  templateUrl: './stepper-footer.component.html',
  styleUrls: ['./stepper-footer.component.css']
})
export class StepperFooterComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: TeamService,
    private router: Router) { }

  id!: number
  ngOnInit(): void {
    const detailId = this.route.snapshot.paramMap.get('id') || 0;
    this.id = +detailId;
  }

  delete() {
    var result = confirm("Want to delete?");
    if (result) {
      this.service.DeleteEmployeeDetail(this.id).subscribe((data: any) => {
        if (data.m_Item2) {
          this.router.navigate(['/teamDetail']);
        } else {
          alert('Delete Failed');
        }
      }, error => {
        alert(error);
      });
    }

  }

}
