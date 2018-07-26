import { Component, OnInit } from '@angular/core';
//declare var $:any;
import * as abc from "../../assets/test";
//import * as bcd from "../../assets/jq";
//import * as jq from "jquery";
import * as $ from "jquery";
import * as see from "../../assets/jq";
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Hello");
    abc.func_call();
    see.a();
    $(".btn").click(function(){
     console.log("Hello from jquery");
      
    })
    
  }

}
