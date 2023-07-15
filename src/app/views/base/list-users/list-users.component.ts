import {Component, ViewChild, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { data } from 'jquery';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  
     // Initializer
      public users: any
      constructor( private userService: UserService, private router:Router){}
  
      // Get All entries
      ngOnInit(): void { 
        // User list
          this.userService.getUsers().subscribe( (datas) =>{
            console.log(datas);
            this.users =datas;
       })
     }

      //Update User
      updateUser(id: any)
      {
        this.router.navigate(['/forms/floating-labels', id])
      }

      //  delete Year
     public dataStateUser:any
      updateStateUser(id: any)
      {
        this.dataStateUser = {
          "actif" : false,
        }
          this.userService.updateStateUser(id,  this.dataStateUser).subscribe(
            (datas) =>{
                console.log(datas);
                this.ngOnInit();
            },
            error => console.log(error)
            )
      }
       // delete User
       activatedUser(id: any)
       {
        this.dataStateUser = {
          "actif" : true,
        }
           this.userService.updateStateUser(id,   this.dataStateUser).subscribe(
             (datas) =>{
                 console.log(datas);
                 this.ngOnInit();
             },
             error => console.log(error)
             )
       }

}
