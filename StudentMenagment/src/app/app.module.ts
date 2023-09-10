import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { StudentComponent } from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import CreateUserComponent from './component/create-user/create-user.component';
import { CreateCourseComponent } from './component/create-course/create-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './component/course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { SelectCourseComponent } from './component/select-course/select-course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    CreateUserComponent,
    CreateCourseComponent,
    CourseListComponent,
    UserListComponent,
    SelectCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
