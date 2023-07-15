import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FolderService } from 'src/app/services/folder/folder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})

export class CarouselsComponent implements OnInit {
  // Initializer
  public folders: any
  constructor( private entityService: FolderService, private router:Router){}

    //Update User
    addDatePromesse(id: any)
    {
      this.router.navigate(['/forms/layout', id])
    }

  // Get All entries
  ngOnInit(): void { 
      this.entityService.getFolderExpirate().subscribe( (datas) =>{
        console.log(datas);
        this.folders =datas;
   })
 }

}
