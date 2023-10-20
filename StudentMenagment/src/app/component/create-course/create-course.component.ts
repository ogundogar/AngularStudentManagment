import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataClientService } from 'src/app/services/data-client.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
	frm:FormGroup;
	user:any;
	constructor(private formBuilder:FormBuilder,private httpClient:HttpClient,private dataClientService:DataClientService){
		this.frm=formBuilder.group({
		teacherId:[""],
		courseName:[""],
		fees:[""],
		duration:[""]});

		dataClientService.getTeacher().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
	}
	onSubmit(){
		console.log(this.frm.value);
		this.dataClientService.addCourse(this.frm.value);
		
	}
}
