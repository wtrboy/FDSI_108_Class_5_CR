import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allUsers = [];

  constructor() {
    var admin = new User();
    admin.email = "admin@mail.com"
    admin.password = "qwerty";
    admin.firstName = "Admin";
    admin.lastName = "User";
    admin.employeeNumber = 0;
    admin.userName = "Admin";

    this.allUsers.push(admin);
   }

  public saveUser(user) {
    this.allUsers.push(user);
  }

  public getUsers() {
    return this.allUsers;
  }
}
