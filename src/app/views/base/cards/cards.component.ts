import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
     // Initializer
     public folders: any
     constructor( private entityService: FolderService){}
 
     // Get All entries
     ngOnInit(): void { 
         this.entityService.getFolder().subscribe( (datas) =>{
           console.log(datas);
           this.folders =datas;
      })
    }
}
