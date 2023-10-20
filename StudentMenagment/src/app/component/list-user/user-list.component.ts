import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataClientService } from 'src/app/services/data-client.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
	public user:any;
	public detail:any;
	
	constructor(private httpClient:HttpClient,private formBuilder:FormBuilder,private DataClientService:DataClientService) {
	this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
	this.DataClientService.getDetail().subscribe({next: (datas)=>this.detail=datas, error :error=>console.log(error)});
		
	}
	onDelete(veri){
		console.log(veri);
		this.DataClientService.deleteUser(veri);
	}
	onUpdate(veri){
		console.log(veri);
		this.DataClientService.deleteUser(veri);
	}
}
