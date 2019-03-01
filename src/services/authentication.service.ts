import {Injectable} from '@angular/core';
import {conf} from '../Constant';
import {HttpClient} from '@angular/common/http';
import {SignUpRequest} from '../model/SignUpRequest';
import {LoginRequest} from '../model/LoginRequest';
import {Wallet} from '../model/Wallet';
import {Observable} from 'rxjs';

@Injectable()
export class AuthenticationService {
  private apiUrl = conf.SERVER_URL + '/auth';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const signInRequest = new LoginRequest(email, password);
    // TODO remove
    const credentials = {login: email, password: password};
    console.log(credentials);
    return this.httpClient.post(this.apiUrl + '/signin', signInRequest, {observe: 'response'});
  }

  register(username: string, email: string, password: string, wallets: Wallet[]): Observable<any> {
    const signUpRequest = new SignUpRequest(username, email, password, wallets);
    // TODO remove
    const credentials = {username: username, email: email, password: password, wallets: wallets};
    console.log(credentials);
    return this.httpClient.post(this.apiUrl + '/signup', signUpRequest, {observe: 'response'});
  }
}
