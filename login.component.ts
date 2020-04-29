import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  
  constructor(private fb : FormBuilder) {}
  

  ngOnInit(): void {}

  userprofileform = this.fb.group({
    name :[''],
    date: [''],
    mobiles:this.fb.array([
      this.fb.Control('')
    ])

  })
  counter:number;
  onsubmit()
  {
    /*console.log(this.dataarray);*/
    console.warn(this.userprofileform.value);
    this.counter = 0;
    for(let mob of this.mobiles.controls)
    {
      console.log("mobiles"+this.userprofileform.get(['mobiles',this.counter]).value)
      this.counter = this.counter + 1;
    }
  }
  get mobiles()
  {
    return this.userprofileform.get('mobiles') as FormArray;
  }
  addnewmobile()
  {
    this.mobiles.push(this.fb.control(''));
  }
  

}

