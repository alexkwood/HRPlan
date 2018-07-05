// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { EmployeeService } from '../../services/employee.service';

// Import Models
import { Employee } from '../../domain/hrplan_db/employee';

// START - USED SERVICES
/*
 *	EmployeeService.create
 *		PARAMS: 
 *		
 *
 *	EmployeeService.get
 *		PARAMS: 
 *		
 *
 *	EmployeeService.update
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

/**
 * Edit component for EmployeeEdit
 */
@Component({
    selector: 'employee-edit',
    templateUrl : './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

    item: Employee;
    model: Employee;
    
    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Employee();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.employeeService.get(id).subscribe(item => this.item = item);
                    
                    
                }
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Employee): void{
        if (formValid) {
            if(item._id){
                this.employeeService.update(item).subscribe(data => this.goBack());
            } else {
                this.employeeService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}