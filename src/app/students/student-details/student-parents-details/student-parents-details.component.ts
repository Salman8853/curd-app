import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-parents-details',
  templateUrl: './student-parents-details.component.html',
  styleUrls: ['./student-parents-details.component.css']
})
export class StudentParentsDetailsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateFunction(){
    this.router.navigateByUrl('/students/details');
  }

}
