import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CreateUserComponent from './component/create-user/create-user.component';
import { AdminComponent } from './component/admin/admin.component';
import { CreateCourseComponent } from './component/create-course/create-course.component';
import { CourseListComponent } from './component/list-course/course-list.component';
import { UserListComponent } from './component/list-user/user-list.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { StudentComponent } from './component/student/student.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { ListStudentComponent } from './component/list-student/list-student.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './component/error/error.component';
import { StudentStudentComponent } from './component/student-student/student-student.component';
import { StudentCourseComponent } from './component/student-course/student-course.component';
import { TeacherCourseComponent } from './component/teacher-course/teacher-course.component';
import { TeacherStudentComponent } from './component/teacher-student/teacher-student.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path:"login",component:LoginComponent},
	//admin sayfası 
	{path:"admin", component:AdminComponent,canActivate:[AuthGuard],
	children:[{path:"create-user", component:CreateUserComponent},
			{path:"create-course", component:CreateCourseComponent},
			{path:"course-list", component:CourseListComponent},
			{path:"user-list", component:UserListComponent,children:[{path:"update-user",component:UpdateUserComponent}]},
			{path:"list-student", component:ListStudentComponent},
		]
	},
	//teacher sayfası 
	{path:"teacher", component:TeacherComponent,canActivate:[AuthGuard],
	children:
	[{path:"teacher-course", component:TeacherCourseComponent, children:[{path:"teacher-student/:courseId", component:TeacherStudentComponent}]}]
	},
	//student sayfası 
	{path:"student", component:StudentComponent,canActivate:[AuthGuard],
	children:[{path:"student-course", component:StudentCourseComponent},
	{path:"student-student",component:StudentStudentComponent}] 
	},
	{path:"**",component:ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
