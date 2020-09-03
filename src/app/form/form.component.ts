import { Component, OnInit } from '@angular/core';
import { Student } from "../Student";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sex: string[] = ["","Male", "Female", "Other"];

  model:Student = new Student(0,"","",null,this.sex[0],"");

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

}
