import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataClientService } from 'src/app/services/data-client.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
	public student :any;
	public course : any;
	public user : any;
	constructor(private httpClient:HttpClient,private DataClientService:DataClientService) {
		
	this.DataClientService.getStudent().subscribe({next: (datas)=>this.student=datas, error :error=>console.log(error)});
	this.DataClientService.getCourse().subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
	this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
	}
	onDelete(veri){
		console.log(veri);
		this.DataClientService.deleteStudent(veri);
	}
}
