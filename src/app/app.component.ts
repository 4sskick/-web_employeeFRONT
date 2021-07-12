import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];

  //inject service here
  constructor(private service: EmployeeService) {

  }

  //pverriding method from angular which gonna called on first time component created
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.service.getEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees)
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    )
  }
}
