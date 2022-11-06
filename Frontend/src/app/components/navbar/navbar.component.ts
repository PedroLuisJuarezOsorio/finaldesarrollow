import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout(event: MouseEvent) {
    event.preventDefault();
    //this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/profile');
  }
}
