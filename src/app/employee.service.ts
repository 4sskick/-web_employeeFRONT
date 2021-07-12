import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private apiServerUrl = '';

    constructor(private client: HttpClient) { }

    public getEmployee(): Observable<Employee[]> {
        return this.client.get<Employee[]>(`${this.apiServerUrl}/employee`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.client.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.client.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public deleteEmployee(employeeId: Number): Observable<void> {
        return this.client.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }

}