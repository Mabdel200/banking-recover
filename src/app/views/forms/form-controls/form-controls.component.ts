import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

      // Initializer
  constructor( private folderService: FolderService,  private route: ActivatedRoute, private router: Router ){}
  // initialzr data storing
    public folder: any
    id:any

  //  Get All entries
    ngOnInit(): void { 
       this.loadData();
    }

    loadData() {
         this.id = this.route.snapshot.params['id'];
         this.folderService.getFolderById(this.id).subscribe ((data) => {
        console.log(data);
        this.folder = data;
      },
      error => console.log(error)
      )
    }

    save() {   
        // console.log(this.dataForm.value);
        this.folderService.updateFolder(this.id, this.folder).subscribe( )
        this.redirectToFolderList();
    }

  redirectToFolderList(){
      this.router.navigate(['/base/breadcrumbs'])
  }

}
