import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  
  dataForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(''),
    telephone: new FormControl(''),
    profil: new FormControl(''),
    role: new FormControl(''),

});

  // Initializer
  constructor( private userService: UserService,  private router:Router ){}

  //  Get All entries
    ngOnInit(): void { 
    }

    loadData() {
    }

    save() {   
        this.userService.saveUser(this.dataForm.value).subscribe( )
        this.redirectToUserList();
    }

    redirectToUserList(){
      this.router.navigate(['/base/list_users'])
  }
}
