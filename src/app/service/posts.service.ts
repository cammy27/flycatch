import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient : HttpClient) { }

  apiUrl="https://jsonplaceholder.typicode.com/posts?userId=";
  postsdetails(userId) {
    return this.httpClient.get(this.apiUrl+userId);  
 }
 baseUrl="https://jsonplaceholder.typicode.com/posts/";
 comments(postID){
  return this.httpClient.get(this.baseUrl+postID+"/comments")
 }
}
