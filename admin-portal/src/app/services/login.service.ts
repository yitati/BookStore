import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http : Http) {}

  // eventually will be called on login component
  sendCredential(username : string, password : string) {
  	// this is the backend server address
  	let url = "http://localhost:8181/token";
  	// encode the username and password use base64 encoding
  	let encodedCredentials = btoa(username+":"+password);
  	let basicHeader = "Basic "+encodedCredentials;
  	let headers = new Headers ({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  	});

  	return this.http.get(url, {headers : headers});
  }

}
