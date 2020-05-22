import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private httpClient : HttpClient) { } 
  
  apiUrl =  "https://jsonplaceholder.typicode.com/users";
  getdetails() {
    return this.httpClient.get(this.apiUrl);  
 }
  baseUrl ="https://jsonplaceholder.typicode.com/users/"
  getfulldetails(id){
    return this.httpClient.get(this.baseUrl+ id);
  }
}
