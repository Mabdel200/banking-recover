import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  isAgentLoggedIn: boolean = false;

   login(userName: string, password: string) {
      console.log(userName);
      console.log(password);
      this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   // Loggin Agent
   loginAgent(userName: string, password: string) {
      console.log(userName);
      console.log(password);
      this.isAgentLoggedIn = userName == 'agent' && password == 'agent';
      localStorage.setItem('isAgentLoggedIn', this.isAgentLoggedIn ? "true" : "false"); 

   return of(this.isAgentLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is Agent Authentication is successful: " + val); 
      })
   );
   }
   //Loggout
   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

   constructor() { }

}
