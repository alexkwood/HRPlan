
// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { EmployeeBaseService } from "./base/employee.base.service";
import { Employee } from '../domain/hrplan_db/employee';

/**
 * YOU CAN OVERRIDE HERE EmployeeBaseService
 */

@Injectable()
export class EmployeeService extends EmployeeBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}