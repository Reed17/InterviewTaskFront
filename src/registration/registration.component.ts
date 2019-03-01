import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp() {

  }

  /*
  * signUp() {
    this.authenticationService.registration(conf.Prefix_Phone + this.superAdmin.value.login, this.superAdmin.value.name, null)
      .subscribe(
        result => {
          if (result.status === 201) {
            console.log('201');
            this.resCreateAdmin = 'Создан Админ: ' + conf.Prefix_Phone + this.superAdmin.value.login;
            this.allUsers();
            setTimeout(() => {
              this.resCreateAdmin = null;
            }, 3000);
            this.superAdmin.reset();
            this.isDisplaysMessage = false;
          }
        }, error => {
          if (error.status === 400) {
            console.log(error);
            console.log(error.error.errorCode);
            console.log(error.error.errorMsg);
            // console.log(error.error.errors[0].code);

            if (error.error.errorCode === 0) {
              this.errorDuplicateLogin = error.error.errorMsg;
            }
            if ( error.error.errorCode === 2) {
              this.errorLogin = error.error.errorMsg;
            }
            if (error.error.errors && error.error.errors[0].code === 'Size') {
              this.errorLength = error.error.errors[0].defaultMessage;
            }
          }
        });
  }
  * */
}
