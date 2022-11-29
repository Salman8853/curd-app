import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentContactDetailsComponent } from './students/student-details/student-contact-details/student-contact-details.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentParentsDetailsComponent } from './students/student-details/student-parents-details/student-parents-details.component';
import { StudentRegistrationComponent } from './students/student-registration/student-registration.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [ 
{ path: '', redirectTo:'home' , pathMatch:'full'},
{ path: 'home', component: HomeComponent },
{path: 'aboutus', component: AboutUsComponent },
{path: 'contactus', component: ContactUsComponent },

//{ path: 'students', component: StudentsComponent },
{ path: 'students', children:[

  {path:'',component:StudentsComponent},
  {path:'details',children:[
    {path:'',component:StudentDetailsComponent},
    {path:'contact-details',component:StudentContactDetailsComponent},
    {path:'parent-details',component:StudentParentsDetailsComponent}
  ]
 },
 {path:'registration',component:StudentRegistrationComponent}

] 
},

{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
