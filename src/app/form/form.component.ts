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

  sex: string[] = ["Male", "Female", "Other"];

  model:Student = new Student(1,"Name","Surname",25,this.sex[0],"Lithuanian");

  submitted: boolean = false;

  onSubmit(){
    this.submitted = true;
  }

}
