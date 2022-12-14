import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) {}

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
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
