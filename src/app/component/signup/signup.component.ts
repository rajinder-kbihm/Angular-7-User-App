import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/modal/user';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService) { }
  userData : User[] = [];
  ngOnInit() {
  }

  onSubmit(){
    if(this.userData['email']!= undefined && this.userData['email']!= '' && this.userData['firstName']!= undefined && this.userData['firstName']!= '' &&  this.userData['lastName']!= undefined &&this.userData['lastName']!= '' && this.userData['age']!= undefined && this.userData['age']!= '' && this.userData['phone']!= undefined && this.userData['phone']!= '' && this.userData['city']!= undefined && this.userData['city']!= '' && this.userData['pincode']!= undefined && this.userData['pincode']!= '' && this.userData['password']!= undefined && this.userData['password']!= ''){
      this.userService.addUser(this.userData)
    }
  }

}
