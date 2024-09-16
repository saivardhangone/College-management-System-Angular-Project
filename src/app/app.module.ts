import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
 import { MenuComponent } from './menu/menu.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { StudentComponent } from './student/student.component';
import { AppFormComponent } from './app-form/app-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { FormComponent } from './form/form.component';
import { DataExchangeDemoComponent } from './data-services-demo/data-exchange-demo/data-exchange-demo.component';
import { PublisherAComponent } from './data-services-demo/publisher-a/publisher-a.component';
import { PublisherBComponent } from './data-services-demo/publisher-b/publisher-b.component';
import { SubscriberCComponent } from './data-services-demo/subscriber-c/subscriber-c.component';
import { SubscriberDComponent } from './data-services-demo/subscriber-d/subscriber-d.component';
import { SubscriberEComponent } from './data-services-demo/subscriber-e/subscriber-e.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { HttpClientModule } from '@angular/common/http';
import { AddstudentComponent } from './studentpage/addstudent/addstudent.component';
import { AddcourseComponent } from './studentpage/addcourse/addcourse.component';
import { CourseDetailsComponent } from './studentpage/course-details/course-details.component';
import { RegisterresultComponent } from './studentpage/registerresult/registerresult.component';
import { DemoComponent } from './demo/demo.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { StudntresultsComponent } from './studentpage/studntresults/studntresults.component';
import { EmployeeRegistrationComponent } from './College/employee-registration/employee-registration.component';
import { EmployeeDetailsComponent } from './College/employee-details/employee-details.component';
import { StudentRegistrationComponent } from './College/student-registration/student-registration.component';
import { StudentDetailsComponent } from './College/student-details/student-details.component';
import { AcademicRegistrationComponent } from './College/academic-registration/academic-registration.component';
import { HomeComponent } from './College/home/home.component';
import { AcademicDetailsComponent } from './College/academic-details/academic-details.component';
import { FacultyDetailsComponent } from './College/faculty-details/faculty-details.component';
import { FacultyRegistrationComponent } from './College/faculty-registration/faculty-registration.component';
import { ParentComponent } from './dataservice/parent/parent.component';
import { ChildComponentComponent } from './dataservice/child-component/child-component.component';
import { Child2Component } from './dataservice/child2/child2.component';
import { AboutusComponent } from './College/Header/aboutus/aboutus.component';
import { CoursesComponent } from './College/Header/courses/courses.component';
import { ContactComponent } from './College/Header/contact/contact.component';
import { CollegeHeaderComponent } from './College/Header/college-header/college-header.component';
import { HeaderPageComponent } from './College/Header/header-page/header-page.component';
import { SadhviComponent } from './app-form/sadhvi/sadhvi.component';


const appRoute:Routes=[
  {path:"Home",component:HomeComponent},
  {path:"Academics",component:AcademicRegistrationComponent},
  {path:"EmployeeDetails",component:EmployeeDetailsComponent},
  {path:"Faculty",component:FacultyDetailsComponent},
  {path:"students",component:StudentDetailsComponent},
  {path:"studentRegister",component:StudentRegistrationComponent},
  {path:"AcademicDetails",component:AcademicDetailsComponent},
  {path:"EmployeeRegister",component:EmployeeRegistrationComponent},
  {path:"FacultyRegister",component:FacultyRegistrationComponent},
  {path:"Home",component:HomeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrationFormComponent,
    StudentComponent,
    AppFormComponent,
    DisplayFormComponent,
    FormComponent,
    DataExchangeDemoComponent,
    PublisherAComponent,
    PublisherBComponent,
    SubscriberCComponent,
    SubscriberDComponent,
    SubscriberEComponent,
    HttpExampleComponent,
    AddstudentComponent,
    AddcourseComponent,
    CourseDetailsComponent,
    RegisterresultComponent,
    DemoComponent,
    StudntresultsComponent,
    EmployeeRegistrationComponent,
    EmployeeDetailsComponent,
    StudentRegistrationComponent,
    StudentDetailsComponent,
    AcademicRegistrationComponent,
    HomeComponent,
    FacultyDetailsComponent,
    AcademicDetailsComponent,
    FacultyRegistrationComponent,
    ParentComponent,
    ChildComponentComponent,
    Child2Component,
    AboutusComponent,
    CoursesComponent,
    ContactComponent,
    CollegeHeaderComponent,
    HeaderPageComponent,
    SadhviComponent
  
  
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
