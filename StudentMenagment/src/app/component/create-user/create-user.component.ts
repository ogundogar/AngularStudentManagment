import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export default class CreateUserComponent {
	frm:FormGroup;
  
	constructor(private formBuilder:FormBuilder){
	  this.frm=formBuilder.group({
			Name:[""],
			Password:[""],
			Detail:[""],
		});
	}
	onSubmit(){console.log(this.frm.value)}
}
