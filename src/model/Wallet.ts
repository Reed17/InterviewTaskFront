export class Wallet {
  walletId: number;
  currency: string;
  balance: number;
  isMultiCurrency: boolean;


  constructor(walletId?: number, currency?: string, balance?: number, isMultiCurrency?: boolean) {
    this.walletId = walletId;
    this.currency = currency;
    this.balance = balance;
    this.isMultiCurrency = isMultiCurrency;
  }
}
