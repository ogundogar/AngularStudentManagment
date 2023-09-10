import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
	frm:FormGroup;
  
	constructor(private formBuilder:FormBuilder){
	  this.frm=formBuilder.group({
		CourseName:[""],
		Teacher:[""],
		Fees:[""],
		Duration:[""]});
	}
	onSubmit(){console.log(this.frm.value)}
}
