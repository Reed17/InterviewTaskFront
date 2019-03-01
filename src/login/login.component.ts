import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;
  jwtHelper: JwtHelper = new JwtHelper();
  loginOrPasswordError = '';

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.loginUser = formBuilder.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  signIn() {
    this.authenticationService.login(this.loginUser.value.login, this.loginUser.value.password)
      .subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          const token = event.body.accessToken;
          const decodedToken = this.jwtHelper.decodeToken(event.body.accessToken);
          const authorityRole = decodedToken.AUTHORITIES_KEY[0].authority;
          localStorage.setItem('currentUser', JSON.stringify({token, authorityRole}));
          if (authorityRole === 'USER') {
            // todo navigate to main page with all existed users
            this.router.navigate([`/`]);
          }
        }
        }, error => {
          this.loginOrPasswordError = 'Login or password is incorrect!';
          console.log(this.loginOrPasswordError);
        }
      );
  }

}
