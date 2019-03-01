import {Injectable} from '@angular/core';
import {conf} from '../Constant';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from '../model/Wallet';

@Injectable()
export class UserService {
  private apiUrl = conf.SERVER_URL + '/user';

  constructor(private httpClient: HttpClient) {
  }

  getUserById(userId: number): Observable<any> {
    const params = new HttpParams().set('id', userId.toString());
    return this.httpClient.get(this.apiUrl, {params, observe: 'response'});
  }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl, {observe: 'response'});
  }

  updateUser(user): Observable<any> {
    return this.httpClient.put(this.apiUrl, user, {observe: 'response'});
  }

  deleteUser(userId: number): Observable<any> {
    const params = new HttpParams().set('id', userId.toString());
    return this.httpClient.delete(this.apiUrl, {params, observe: 'response'});
  }

  getUserWallets(userId: number): Observable<any> {
    const params = new HttpParams().set('id', userId.toString());
    return this.httpClient.get(this.apiUrl + '/wallets', {params, observe: 'events'});
  }

  createNewUserWallet(userId: number, wallet: Wallet): Observable<any> {
    const params = new HttpParams().set('id', userId.toString());
    return this.httpClient.put(this.apiUrl + '/wallet/new', wallet, {params, observe: 'events'});
  }

}
