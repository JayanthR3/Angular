import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {



  username: any;
  formdata: any;



  ngOnInit() {
    this.formdata=new FormGroup({
      userName:  new FormControl("hi")
    });
   
  }
  onClickSubmit(data: { userName: any; }) {this.username=data.userName;}
}

