import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';


@Component({
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
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
