import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-contact-details',
  templateUrl: './student-contact-details.component.html',
  styleUrls: ['./student-contact-details.component.css']
})
export class StudentContactDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateFunction(){
    this.router.navigateByUrl('/students/details');
  }

}
