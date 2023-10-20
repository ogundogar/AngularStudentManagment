import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataClientService } from '../services/data-client.service';
import { TeacherComponent } from '../component/teacher/teacher.component';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	public data1:any;
	
	constructor(private data:DataService){
		console.log()
	}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
	if(this.data.getData())
    {return true;}
	else
	{return false;}
  }
  
}
