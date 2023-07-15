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
    datePromesse: new FormControl(),
    montant: new FormControl(''),
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
      this.userService.getUserByRole("Agent").subscribe((data) => {
            console.log(data)
            this.agents = data
       })
      // Get all clients
       this.userService.getClients().subscribe((data) => {
            console.log(data)
            this.clients = data
       })
    }

    dataFolder:any
    save() {   
      console.log(this.dataForm.value);
      this.dataFolder = {
        "nom" : this.dataForm.value.nom,
        "montant" : this.dataForm.value.montant,
        "datePromesse" : this.dataForm.value.datePromesse,
        "cycle" : this.dataForm.value.cycle,
        "delai" : this.dataForm.value.delai,
        "user" : {
            "id":  this.dataForm.value.user
        },
        "client" : {
          "id":  this.dataForm.value.client
      },
    }

        this.folderService.saveFolder(this.dataFolder).subscribe( )
        this.redirectToFolderList();
    }

    redirectToFolderList(){
      this.router.navigate(['/base/breadcrumbs'])
  }
}
