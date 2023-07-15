import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

// Connexion to spring project
readonly API_URL = "http://localhost:9090"

readonly FIND_ALL_FOLDERS = "/findAllFolder"

readonly POST_FOLDER = "/addFolder"

readonly FIND_ONE_FOLDER = "/findFolderById"

readonly FIND_FOLDER_BY_CYCLE = "/findFolderByLevelCycle"

readonly _FOLDER_EXPIRATE = "/findAllFolderExpirate"

readonly _FOLDER_ACTIF = "/findActifFolder"

readonly _UPDATE_FOLDER = "/updateFolder"

readonly  _UPDATE_STATE_FOLDER = "/updateStateFolder"

readonly  _UPDATE_VERSEMENT_FOLDER = "/addTransaction"

constructor( private httpClient: HttpClient) { }

getFolder(){
    return this.httpClient.get(this.API_URL+this.FIND_ALL_FOLDERS)
}

saveFolder( data: any ) {
    return this.httpClient.post((this.API_URL+this.POST_FOLDER), data)
}

 getFolderById( id: any ) {
   return this.httpClient.get( `${this.API_URL+this.FIND_ONE_FOLDER}/${id}` )
}
getFolderExpirate() {
  return this.httpClient.get( `${this.API_URL+this._FOLDER_EXPIRATE}` )
}
getFolderActif() {
  return this.httpClient.get( `${this.API_URL+this._FOLDER_ACTIF}` )
}
updateFolder( id: any, data: any ) {
  return this.httpClient.put(`${this.API_URL+this._UPDATE_FOLDER}/${id}`,  data)
}

//Update User State By Id iwith services.
updateStateFolder( id: any, data:boolean ) {
  return this.httpClient.put(`${this.API_URL+this._UPDATE_STATE_FOLDER}/${id}`,  data)
}

//Add new versement
addVersement( id: any, data:any ) {
  return this.httpClient.put(`${this.API_URL+this._UPDATE_VERSEMENT_FOLDER}/${id}`,  data)
}

}
