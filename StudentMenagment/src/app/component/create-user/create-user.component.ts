import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataClientService } from 'src/app/services/data-client.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export default class CreateUserComponent {
	frm:FormGroup;
	
	constructor(private formBuilder:FormBuilder,private httpClient:HttpClient,private DataClientService:DataClientService){
	  this.frm=formBuilder.group({
			name:[""],
			password:[""],
			detailId:[""],
		});
	}
	onSubmit(){
		console.log(this.frm.value);
		this.DataClientService.addUser(this.frm.value);
	}
}
