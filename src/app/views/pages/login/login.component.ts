import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

      public userName: any;
      public password: any;
      public dataForm: any;
    
      constructor( private authService : AuthService, private router : Router ) { }

      ngOnInit() { 
        this.dataForm = new FormGroup({
          userName: new FormControl(),
          password: new FormControl(),
        });
      }

    login(data: any) {
      console.log(this.dataForm.value);

      this.userName =data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);
    
      //Loggin Admin
      this.authService.login(this.userName, this.password)
        .subscribe( data => { 
            console.log("Is Login Success: " + data); 
          if(data) this.router.navigate(['/dashboard']); 
      });
      //Login Agent
      this.authService.loginAgent(this.userName, this.password)
      .subscribe( data => { 
          console.log("Is Login Success: " + data); 
        if(data) this.router.navigate(['/dashboardAgent']); 
    });

    }

}
