import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataClientService } from 'src/app/services/data-client.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	frm:FormGroup;
	public user:any;

	constructor(private formBuilder:FormBuilder,private DataClientService:DataClientService,private router: Router,private data:DataService){
		this.frm=formBuilder.group({
			  name:[""],
			  password:[""],
		  });
		 this.DataClientService.getUser().subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
	  }
	  onSubmit(){
		  this.user.forEach(item => {
			if(this.frm.value.name===item.name && this.frm.value.password===item.password){
				if(item.detailId===1)
				{
					this.data.setData(item.id);
					this.router.navigate(['/teacher']) 
				}
				else if(item.detailId===2){
					this.data.setData(item.id);
					this.router.navigate(['/admin'])
				}
				else if(item.detailId===3){
					this.data.setData(item.id);
					this.router.navigate(['/student'])
				}
			}
		  });
	  }

}
