import { Injectable } from '@angular/core';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user : User[]){
    console.log('User Added ',user);
  }
}
