import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{PostsService} from '../service/posts.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  userID: any;
  details: Object;
  title: any;
  post_comment: Object;
  show: {[key: number]: boolean} = {};
  hide:boolean =true;

  constructor(private activatedroute: ActivatedRoute,private postservice:PostsService,private router:Router) { }

comments(id,index){
  console.log("the post id is:"+id);
  console.log("the index id is:" + index);
  this.hide= !this.hide;
  this.show[index] = true;
  // this.show[index] =false;
  this.postservice.comments(id).subscribe(data=>{
  console.log(data);
  this.post_comment= data;
  console.log(this.post_comment['body'])
  })
  this.show[index]=false;
}

  ngOnInit() {
  this.userID= localStorage.getItem('userID');
  this.postservice.postsdetails(this.userID).subscribe(data=>{
    console.log("the post posted are:"+ JSON.stringify(data));
    this.details=data;;
  
    // console.log("the title is" +this.post_details['title']);
  })
    console.log(this.userID);
  }

}
export interface User {
  id: number; // Added
  name: string;
  email: string;
  body: string;
  comments:string;
}
