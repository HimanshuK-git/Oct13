import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      firstname: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      lastname: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      course: ['',Validators.required]
    })
  }

  ngOnInit() {
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
    console.log(this.val);
    this.form.reset();
  }
}
