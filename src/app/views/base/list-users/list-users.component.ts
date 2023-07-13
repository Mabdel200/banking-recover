import {Component, ViewChild, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  
     // Initializer
      public users: any
      constructor( private userService: UserService){}
  
      // Get All entries
      ngOnInit(): void { 
        // User list
          this.userService.getUsers().subscribe( (datas) =>{
            console.log(datas);
            this.users =datas;
       })
     }
}
