import { Component, OnInit } from '@angular/core';
import { User } from './user/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

<<<<<<< HEAD
  user : User;
  title = 'iTransform-project';
=======
  user: User;
  constructor(private router: Router) {}
>>>>>>> 238af308eebadd81d9c3b94f1f7e241cd45ea638

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));

    if (this.user != null) {
    console.log('hello');
    console.log(this.user);
    document.getElementById('loginbtn').style.display = 'none';
    document.getElementById('signupbtn').style.display = 'none';
}
  }

  logout() {
    sessionStorage.removeItem('user');
    // this.router.navigate(['/login']);
    // window.location.href = '/login';
  }
  
}
