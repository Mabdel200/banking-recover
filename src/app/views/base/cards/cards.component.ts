import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
     // Initializer
     public folders: any
     constructor( private entityService: FolderService, private router:Router){}
 
     // Get All entries
     ngOnInit(): void { 
         this.entityService.getFolder().subscribe( (datas) =>{
           console.log(datas);
           this.folders =datas;
      })
    }

     //Update User
     detailFolderActif(id: any)
     {
       this.router.navigate(['/base/list-group', id])
     }
      //Update User
      addVersement(id: any)
      {
        this.router.navigate(['/forms/input-group', id])
      }

     //  delete Year
    public dataState:any
     updateStateFolder(id: any)
     {
       this.dataState = {
         "actif" : false,
       }
         this.entityService.updateStateFolder(id,  this.dataState).subscribe(
           (datas) =>{
               console.log(datas);
               this.ngOnInit();
           },
           error => console.log(error)
           )
     }
      // delete User
      activatedFolder(id: any)
      {
        this.dataState = {
          "actif" : true,
        }
        this.entityService.updateStateFolder(id, this.dataState).subscribe(
          (datas) =>{
              console.log(datas);
              this.ngOnInit();
          },
          error => console.log(error)
          )
      }
}
