import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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

  // check if we already logged in
  checkSession() {
        // this is the backend server address
    let url = "http://localhost:8181/checkSession";
    
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers : headers});
  }

  logout() {
        // this is the backend server address
    let url = "http://localhost:8181/user/logout";
    
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    // difference between the check session is we need to use post method here
    return this.http.post(url, '', {headers : headers});
  }

}
