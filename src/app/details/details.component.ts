import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ListServiceService} from '../service/list-service.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  getValue: any;
  details: Object;
  userID: string;

  constructor(private router:Router,private activatedroute: ActivatedRoute,private listservice: ListServiceService) { }

  post_details(){
    this.router.navigate(['/posts']);
  }


  ngOnInit() {
    this.getValue= this.activatedroute.snapshot.paramMap.get("id");
    localStorage.setItem('userID',this.getValue);
    this.listservice.getfulldetails(this.getValue).subscribe(data=>{
      console.log("the full details of the selected user is"+ data);
      this.details=data;
      console.log("details:" + this.details)
      console.log("name of the user" + this.details['name']);
      
    })
    console.log(this.getValue);
  }

}
