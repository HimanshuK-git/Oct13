import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'carts',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  address;
  isSubmit;
  msg; 

  apac=["China","India","Korea"];
  emea=["UK","Denmark","Texas"];
  amer=["New York","Las Vegas","Ohio"];
  locations=[];
  
  constructor(fb: FormBuilder, private homey: HomeComponent) {
    this.address = fb.group({
      location: ['',Validators.required],
      country: ['',Validators.required],
      state: ['',Validators.required],
      homeaddress:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onChange(value){
    value == 1 ? this.locations = this.apac:'';
    value == 2 ? this.locations = this.emea : '';
    value == 3 ? this.locations = this.amer : '';
  }

  submitAddress(){
    this.isSubmit = true;
    this.msg = "Thank You for Shopping!";
    this.address.reset();
  }
}
