import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataClientService } from 'src/app/services/data-client.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
	frm:FormGroup;
	public user:any;
	
	constructor(private formBuilder:FormBuilder,private DataClientService:DataClientService,private router: Router) {
		this.frm=formBuilder.group({
			id:[""],
			name:[""],
			password:[""],
			detailId:[""]
		});
} 
	async onUpdate(){
		console.log(this.frm.value);
		await this.DataClientService.updateUser(this.frm.value);
		this.router.navigate(['/admin']);
		}
}
