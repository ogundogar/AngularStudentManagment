import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataClientService } from 'src/app/services/data-client.service';
import { TeacherComponent } from '../teacher/teacher.component';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.css']
})
export class TeacherCourseComponent {
	public course:any;
	public user:any;
	public teacherId:any;
	
	constructor(private httpClient:HttpClient,private DataClientService:DataClientService,private activatedRoute: ActivatedRoute,teachercomponent:TeacherComponent,private router: Router) {
		
		DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
		DataClientService.getCourse().subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
	this.teacherId=teachercomponent.userId;
	}
	onSubmit(courseId){
		this.router.navigate([`teacher/teacher-course/teacher-student`,courseId])
	}
}
