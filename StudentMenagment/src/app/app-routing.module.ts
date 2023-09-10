import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CreateUserComponent from './component/create-user/create-user.component';
import { AdminComponent } from './component/admin/admin.component';
import { CreateCourseComponent } from './component/create-course/create-course.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { SelectCourseComponent } from './component/select-course/select-course.component';

const routes: Routes = [
	//admin sayfası 
	{path:"admin", component:AdminComponent,
	children:[{path:"create-user", component:CreateUserComponent},
			{path:"create-course", component:CreateCourseComponent},]
	},
	//teacher sayfası 
	{path:"teacher", component:AdminComponent,children:
	[{path:"course-list/:id", component:CourseListComponent,children:
	[{path:"user-list", component:UserListComponent}]}]
	},
	//student sayfası 
	{path:"student", component:AdminComponent,
	children:[{path:"course-list", component:CourseListComponent},
	{path:"select-course", component:SelectCourseComponent}]
	},
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
