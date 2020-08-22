import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService} from 'src/app/services/shared.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  email = "";
  password = "";
  loginError = false;

  constructor(private data:DataService, private router:Router, private shared: SharedService) { }

  ngOnInit(): void {
  }

  login(){
    console.log("Login fn", this.email, this.password);

    var allUsers = this.data.getUsers();
    var found = false;

    for(let i=0; i< allUsers.length; i++) {
      let user = allUsers[i];

      if(user.email === this.email.toLowerCase() && user.password == this.password){
        console.log("Valid Credential!");
        found = true;
        this.loginError = false;

        this.shared.isUserLoggedIn = true;
        this.shared.userName = user.userName;

        // send the user to another page
        this.router.navigateByUrl("user/register");
      }
    }

    if (!found) {
      this.loginError = true;
      console.log("Error, incorrect credentials!")
    }

    /**
     * inject the data service
     * on login, get all users from the service
     * loop over the array, get each user
     * compare user email and pass with the 2 variables
     */

  }
}
