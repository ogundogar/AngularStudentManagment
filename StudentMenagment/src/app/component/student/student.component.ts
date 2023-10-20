import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
	public userId:any;
	constructor(private activatedRoute: ActivatedRoute,private data:DataService)
	{
	this.userId=this.data.getData();
	}
}
