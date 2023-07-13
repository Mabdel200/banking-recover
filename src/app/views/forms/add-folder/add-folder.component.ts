import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FolderService } from 'src/app/services/folder/folder.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.scss']
})

export class AddFolderComponent  implements OnInit{

  public agents: any
  public clients: any

  dataForm = new FormGroup({
    nom: new FormControl(),
    dateCreation: new FormControl(),
    datePromesse: new FormControl(),
    montant: new FormControl(''),
    pourcentage: new FormControl(''),
    cycle: new FormControl(''),
    delai: new FormControl(''),
    user: new FormControl(''),
    client: new FormControl(''),

});

  // Initializer
  constructor( private folderService: FolderService, private userService: UserService,  private router:Router ){}

  //  Get All entries
    ngOnInit(): void { 
      this.loadData()
    }

    loadData() {
      // Get all  agent
      this.userService.getUserByRole('2').subscribe((data) => {
            console.log(data)
            this.agents = data
       })
      // Get all clients
       this.userService.getClients().subscribe((data) => {
            console.log(data)
            this.clients = data
       })
    }

    save() {   
        this.folderService.saveFolder(this.dataForm.value).subscribe( )
        this.redirectToFolderList();
    }

    redirectToFolderList(){
      this.router.navigate(['/base/breadcrumb'])
  }
}
