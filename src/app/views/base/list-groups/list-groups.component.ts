import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {

   // Initializer
   public folder: any
   id:any

   constructor( private entityService: FolderService,  private route: ActivatedRoute){}

  //  Get All entries
   ngOnInit(): void { 
        this.loadData();
    }

    loadData() {
        this.id = this.route.snapshot.params['id'];
        this.entityService.getFolderById(this.id).subscribe ((data) => {
        console.log(data);
        this.folder = data;
      },
      error => console.log(error)
      )
    }
}
