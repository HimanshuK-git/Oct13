import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses=[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getJSON().subscribe(response =>{
      (this.courses as any) = response;
    })
  }

}
