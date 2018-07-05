
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  FOR CUSTOMIZE EmployeeBaseService PLEASE EDIT ../Employee.service.ts
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
 
//DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Employee } from '../../domain/hrplan_db/employee';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Employee.service.ts
 */
 
/*
 * SCHEMA DB Employee
 * 
	{
		firstName: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		
	}
 * 
 */
@Injectable()
export class EmployeeBaseService {

    contextUrl:string = config.host + "/employees";
    constructor(
        protected http: Http,
        protected authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	
	/**
     * Create new item
     */
     create(item: Employee): Observable<Employee> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Employee> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Employee)
    }

	
    /**
     * Get list of items
     */
	
	list(): Observable<Employee[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Employee[])
    }
	
    /**
     * Update item
     */
	update(item: Employee): Observable<Employee> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}
