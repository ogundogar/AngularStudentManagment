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
import { CourseListComponent } from './component/list-course/course-list.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './component/list-user/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { ListStudentComponent } from './component/list-student/list-student.component';
import { ErrorComponent } from './component/error/error.component';
import { TeacherCourseComponent } from './component/teacher-course/teacher-course.component';
import { TeacherStudentComponent } from './component/teacher-student/teacher-student.component';
import { StudentCourseComponent } from './component/student-course/student-course.component';
import { StudentStudentComponent } from './component/student-student/student-student.component';
import { AuthGuard } from './guard/auth.guard';

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
    UpdateUserComponent,
    ListStudentComponent,
    ErrorComponent,
    TeacherCourseComponent,
    TeacherStudentComponent,
    StudentCourseComponent,
    StudentStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
