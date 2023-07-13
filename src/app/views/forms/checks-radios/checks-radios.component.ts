import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FolderService } from 'src/app/services/folder/folder.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checks-radios',
  templateUrl: './checks-radios.component.html',
  styleUrls: ['./checks-radios.component.scss']
})
export class ChecksRadiosComponent implements OnInit {
  dataForm = new FormGroup({
    montant: new FormControl(),
});

  // Initializer
  constructor( private folderService: FolderService, private userService: UserService,  private router:Router ){}
  clients:any;
  agents:any;
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
        this.redirectToVersementList();
    }

    redirectToVersementList(){
      this.router.navigate(['/base/collapse']);
  }
}
