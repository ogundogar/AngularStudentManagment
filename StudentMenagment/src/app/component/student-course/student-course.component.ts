import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataClientService } from 'src/app/services/data-client.service';
import { StudentComponent } from '../student/student.component';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent {
	public course:any;
	public user:any;
	public studentId:any;
	public student:any;
	public dataCourse:any;
	constructor(private httpClient:HttpClient,private DataClientService:DataClientService,private activatedRoute: ActivatedRoute,studentcomponent:StudentComponent,private router: Router,private formBuilder:FormBuilder) {
		
		//Student İd numarası (student giriş yaptığında student componentten alınıyor.)
	this.studentId=studentcomponent.userId;
		//Course Tablosu 
	this.DataClientService.getCourse().subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
		//User Tablosu 
	this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});

	
	}
	onSubmit(_course){
		//Katılmak istediği Course'un verileri
			this.student=({
			teacherId:_course.teacherId,
			courseId:_course.id,
			studentId:this.studentId,
			passed:false
		});
			
			//Student'ın daha önce course kayıtlı ise kayıt olamıyor.
			let studentIdKayitli=false;

			this.DataClientService.getStudentCourseId(_course.id).subscribe(
				(datas)=> {
				datas.forEach((item) => {
					if(this.studentId==item.studentId)
					{
						studentIdKayitli=true;
					}
				});
				console.log(studentIdKayitli);
				if(!studentIdKayitli){
					this.DataClientService.addStudent(this.student).subscribe((result)=>{console.warn(result)});
					console.log("Kursa Kaydedildi.")
				}
				else{
					console.log("Zaten bu kursa kayıtlısınız.")
				}
			});
	}
}
