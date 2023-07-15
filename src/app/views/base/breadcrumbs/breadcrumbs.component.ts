import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
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

     //Update Year
     updateFolder(id: any)
     {
       this.router.navigate(['/forms/form-control', id])
     }

     //  //delete Year
     detailFolder(id: any)
     {
       this.router.navigate(['/base/collapse', id])
     }

 
}
