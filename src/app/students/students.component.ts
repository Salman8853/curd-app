import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

   studentsList:Student[]=[];
  constructor(private _studentservice:StudentServiceService){}

  ngOnInit(): void {
    this.getAllStudentsList();
  }

   private getAllStudentsList(){

      this._studentservice.getAllStudents().subscribe(student=>{
         this.studentsList=student;
        });
        console.log(this.studentsList);
        
     /// this.studentsData=

    }
   

}
