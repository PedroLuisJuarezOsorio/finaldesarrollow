import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null,
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) {}

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data: Object) {
    this.Token.handle(data);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: { error: { error: null } }) {
    this.error = error.error.error;
  }
  ngOnInit(): void {}
}
