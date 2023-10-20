import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataClientService {
	public user:any;
	public detail:any;
	public course:any;
	public student:any;
	private URL="https://studentmanagement20230923165232.azurewebsites.net/";
	constructor(private httpClient:HttpClient) {}
	getUser():Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadUser`)
	}
	getTeacher():Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadUser/Teacher`)
	}
	getDetail():Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadDetail`);
	}
	getCourse():Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadCourse`);
	}
	getStudent():Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadStudent`);
	}
	getStudentCourseId(courseId):Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadStudent/Course/${courseId}`);
	}
	getStudentId(studentId):Observable<any>{
		return this.httpClient.get(`${this.URL}/api/ReadStudent/Student/${studentId}`);
	}
	addUser(veri){
		this.httpClient.post(`${this.URL}/api/WriteUser`,veri).subscribe((result)=>{console.warn(result)});
	}
	addCourse(veri){
		this.httpClient.post(`${this.URL}/api/WriteCourse`,veri).subscribe((result)=>{console.warn(result)});
	}
	addStudent(veri): Observable<any> {
		return this.httpClient.post(`${this.URL}/api/WriteStudent`,veri);
	}
	deleteUser(veri){
		this.httpClient.delete(`${this.URL}/api/WriteUser/Delete`,{ body: veri }).subscribe((result)=>{console.warn(result)});
	}
	deleteCourse(veri){
		this.httpClient.delete(`${this.URL}/api/WriteCourse`,{ body: veri }).subscribe((result)=>{console.warn(result)});
	}
	deleteStudent(veri){
		this.httpClient.delete(`${this.URL}/api/WriteStudent`,{ body: veri }).subscribe((result)=>{console.warn(result)});
	}
	updateUser(veri){
		this.httpClient.put(`${this.URL}/api/WriteUser/Put`,veri).subscribe((result)=>{console.warn(result)});
	}
	updateCourse(veri){
		this.httpClient.put(`${this.URL}/api/WriteCourse`,veri).subscribe((result)=>{console.warn(result)});
	}
	updateStudent(veri){
		this.httpClient.put(`${this.URL}/api/WriteStudent`,veri).subscribe((result)=>{console.warn(result)});
	}
	
}
