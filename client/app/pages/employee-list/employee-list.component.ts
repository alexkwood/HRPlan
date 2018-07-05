// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { EmployeeService } from '../../services/employee.service';

// Import Models
import { Employee } from '../../domain/hrplan_db/employee';

// START - USED SERVICES
/*
 *	EmployeeService.delete
 *		PARAMS: 
 *		
 *
 *	EmployeeService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * EmployeeService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "employee-list",
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    
    // Attributes
    list: Employee[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private employeeService: EmployeeService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.employeeService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.employeeService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}