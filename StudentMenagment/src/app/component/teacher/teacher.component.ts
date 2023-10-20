import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],

})
export class TeacherComponent {
	public userId:any;
	constructor(private activatedRoute: ActivatedRoute,private data:DataService)
	{
	this.userId=this.data.getData();
	}
}
