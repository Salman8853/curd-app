import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private studentUrl='api/students/';

  constructor(private _http:HttpClient) { }

 

    getAllStudents():Observable<Student[]>{
     return this._http.get<Student[]>(this.studentUrl);
   }

}
