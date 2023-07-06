import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
// Connexion to spring project
  readonly API_URL = "http://localhost:9090"

  readonly FIND_ALLUSERS = "/findAllUser"

  readonly POST_USER = "/addUser"

  readonly FIND_ONE_USER = "/findUserById"

  readonly _GET_USER_BY_ROLE = "/findAllUserByRole"

  readonly _ALL_CLIENTS = "/findAllClient"


  constructor( private httpClient: HttpClient) { }


  getUsers(){
      return this.httpClient.get(this.API_URL+this.FIND_ALLUSERS)
  }
  getClients(){
    return this.httpClient.get(this.API_URL+this._ALL_CLIENTS)
}
  
  saveUser( data: any ) {
      return this.httpClient.post((this.API_URL+this.POST_USER), data)
  }

   getUserById( id: string ) {
     return this.httpClient.get( `${this.API_URL+this.FIND_ONE_USER}/${id}` )
  }

  getUserByRole( role: any ) {
    return this.httpClient.get( `${this.API_URL+this._GET_USER_BY_ROLE}/${role}` )
 }
  
}
