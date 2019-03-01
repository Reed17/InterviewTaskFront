import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Injectable()
export class TokenService {

  constructor(private jwtHelper: JwtHelper,
              private userService: UserService,
              private router: Router) {
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    return this.jwtHelper.isTokenExpired(token);
  }

  getToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser && currentUser.token;
    return token ? token : '';
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
