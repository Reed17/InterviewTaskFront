import {Wallet} from './Wallet';

export class SignUpRequest {
  username: string;
  email: string;
  password: string;
  wallets: Wallet[];

  constructor(username?: string, email?: string, password?: string, wallets?: Wallet[]) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.wallets = wallets;
  }
}
