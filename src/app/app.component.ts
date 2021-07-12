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

  //ref: https://getbootstrap.com/docs/4.6/components/modal/#modal-components
  //section: live demo below `Modal Example`
  public openModalOnMode(employee: Employee, mode: string) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';//default is `submit`
    //make it invisible
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#employeeModalAdd');
    } else if (mode === 'edit') {
      button.setAttribute('data-target', '#employeeModalEdit');
    } else if (mode === 'delete') {
      button.setAttribute('data-target', '#employeeModalDelete');
    }

    //make button appeared on DOM
    container?.appendChild(button);

    //invoke action click on button
    button.click();
  }
}
