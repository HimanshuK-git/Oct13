import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form; 
  msg;
  isSubmitted = false;
  val;
  courses=[];

  constructor(private data: DataService, fb: FormBuilder) { 
    this.form = fb.group({
      firstname: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      lastname: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      courses: ['']
    })
  }

  ngOnInit() {
    this.data.getJSON().subscribe(response =>{
      (this.courses as any) = response
    })
  }

  get firstname(){
    return this.form.get('firstname');
  }

  get lastname(){
    return this.form.get('lastname');
  }

  submit(){
    this.isSubmitted = true;
    this.msg = "Success";
    this.val = this.form.value;
    this.form.reset();
  }
}
