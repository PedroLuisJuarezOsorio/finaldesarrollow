import { HttpHandler } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  handle(token: any) {
    this.set(token);
    // console.log(this.payload(token));
  }

  set(token: string) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  /* isValid() {
    const token = this.get();
    if (this.get()) {
      //  const payload = this.payload(token);
    }
  }*/

  //payload(token: any){
  //  return.token.split('.')[1];
  //}
}
