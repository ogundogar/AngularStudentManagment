import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataClientService } from 'src/app/services/data-client.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

	public course:any;
	public user:any;
	
	constructor(private httpClient:HttpClient,private DataClientService:DataClientService) {
		
	this.DataClientService.getCourse().subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
	this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
}
onDelete(veri){
	console.log(veri);
	this.DataClientService.deleteCourse(veri);
}
}
