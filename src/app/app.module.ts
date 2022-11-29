import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentRegistrationComponent } from './students/student-registration/student-registration.component';
import { StudentParentsDetailsComponent } from './students/student-details/student-parents-details/student-parents-details.component';
import { StudentContactDetailsComponent } from './students/student-details/student-contact-details/student-contact-details.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestService } from './test-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    StudentDetailsComponent,
    StudentRegistrationComponent,
    StudentParentsDetailsComponent,
    StudentContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TestService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
