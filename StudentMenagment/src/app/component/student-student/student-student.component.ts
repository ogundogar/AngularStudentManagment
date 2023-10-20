import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataClientService } from 'src/app/services/data-client.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-student-student',
  templateUrl: './student-student.component.html',
  styleUrls: ['./student-student.component.css']
})
export class StudentStudentComponent {
	public student :any;
	public course : any;
	public user : any;

	constructor(private httpClient:HttpClient,private DataClientService:DataClientService,private studentcomponent:StudentComponent) {
		
	this.DataClientService.getStudentId(studentcomponent.userId).subscribe({next: (datas)=>this.student=datas, error :error=>console.log(error)});
	this.DataClientService.getCourse().subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
	this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
		
	}
}
