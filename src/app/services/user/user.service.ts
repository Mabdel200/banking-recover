import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 *  @author: abdel aziz abbo
 */

@Injectable({
  providedIn: 'root'
})

export class UserService {

  readonly API_URL = "http://localhost:9090"

  readonly FIND_ALLUSERS = "/findAllUser"

  readonly POST_USER = "/addUser"

  readonly FIND_ONE_USER = "/findUserById"

  readonly _GET_USER_BY_ROLE = "/findAllUserByRole"

  readonly _ALL_CLIENTS = "/findAllClient"

  readonly  _UPDATE_USER = "/updateUser"

  readonly  _UPDATE_STATE_USER = "/updateStateUser"


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
  //Update User By Id in the service.
  updateUser( id: any, data: any ) {
     return this.httpClient.put(`${this.API_URL+this._UPDATE_USER}/${id}`,  data)
  }
     //Update User State By Id iwith services.
  updateStateUser( id: any, data:boolean ) {
      return this.httpClient.put(`${this.API_URL+this._UPDATE_STATE_USER}/${id}`,  data)
  }

}
