import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/modal/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  userData : User[] = [];
  ngOnInit() {
  }

}
