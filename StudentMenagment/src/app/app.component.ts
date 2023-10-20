import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentMenagment';
  public course:any;
  public user:any;
  constructor(private httpClient:HttpClient) {
	httpClient.get("https://localhost:7100/api/ReadCourse")
	.subscribe({next: (datas)=>this.course=datas, error :error=>console.log(error)});
	
	httpClient.get("https://localhost:7100/api/ReadUser")
	.subscribe({next: (datas)=>this.user=datas, error :error=>console.log(error)});
  }
}
