import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateFunction(){
    this.router.navigateByUrl('/students');
  }

}
