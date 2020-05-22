import { Component, OnInit } from '@angular/core';
import {ListServiceService} from '../service/list-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  lists: Object;

  constructor(private listservice:ListServiceService,private router:Router) { }

  details(id){
    console.log(id);
    this.router.navigate(['/detail',{id}]);
  }
  ngOnInit() {
    this.listservice.getdetails().subscribe(data=>{
      console.log("the list of users are:" +  data);
      this.lists = data
    })
  }

}
