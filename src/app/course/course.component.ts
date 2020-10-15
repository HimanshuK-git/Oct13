import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { filter,map } from "rxjs/operators";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  isFirst: boolean = false;
  isLast: boolean = false;
  id: number;
  course;
  courses=[];
  skills=[];

  constructor(private route: ActivatedRoute, private data: DataService) {}
  

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.data.getJSON().subscribe(response =>{
      (this.course as any)= response[this.id-1];
      this.skills = response[this.id-1].skills;
    })
    this.data.getJSON().subscribe(response =>{
      (this.courses as any)= response;
    })
  }

  common = () =>{
    this.data.getJSON().subscribe(response =>{
      (this.course as any)= response[this.id-1];
      this.skills = response[this.id-1].skills;
    })
  }
  goBack(){
    this.id=this.id-1;
    console.log(this.id);
    this.common();
    this.id==(this.courses.length+1 - this.courses.length) ? this.isFirst=true: this.isFirst=false;
    this.isLast=false;
  }

  goNext(){
    this.isFirst=false;
    this.id=this.id+1;
    console.log(this.id);
    this.common();
    this.id==this.courses.length ? this.isLast=true : this.isLast=false;
  }
}
