import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/modal/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  userData : User[] = [];
  ngOnInit() {
  }

}
