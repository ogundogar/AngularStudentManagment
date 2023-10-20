import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataClientService } from 'src/app/services/data-client.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-student',
  templateUrl: './teacher-student.component.html',
  styleUrls: ['./teacher-student.component.css']
})
export class TeacherStudentComponent {
	public courseId:any;
	public student :any;
	public course : any;
	public user : any;

	constructor(private httpClient:HttpClient,private DataClientService:DataClientService,private activatedRoute:ActivatedRoute) {
		//User tablosundan veri çekme işlemi
		this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
		//Course tablosundan veri çekme işlemi
		this.DataClientService.getCourse().subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
		//Student Tablosunda veri çekme işlemi
		this.DataClientService.getStudent().subscribe({next: (datas)=>this.student=datas, error :error=>console.log(error)});
		//Url'den gelen parametreyi yakalmak için
		this.courseId=activatedRoute.snapshot.paramMap.get("courseId");
		console.log(this.courseId);

	}
	onUpdate(passed){
		console.log(passed);
		passed.passed=!passed.passed;
		this.DataClientService.updateStudent(passed);
		}
}
