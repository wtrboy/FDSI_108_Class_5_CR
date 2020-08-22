import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string;
  showAlert = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  // true = bnt disabled
  // false = enabled

  shouldSaveDisabled(){
    if(!this.model.userName || !this.model.email || !this.model.employeeNumber){
      return true; // disable
    }

    // validate passwords
    if (!this.model.password || this.model.password !=this.retypePassword){
      return true; // disable
    }

    return false;
  }

  saveUser() {
    // save user
    console.log("Saving user", this.model);
    this.dataService.saveUser(this.model);

    // clear the form
    this.model = new User();
    this. retypePassword = "";

    // show success message
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 5000)
  }
}
