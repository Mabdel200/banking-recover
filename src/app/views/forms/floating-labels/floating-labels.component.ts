import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-floating-labels',
  templateUrl: './floating-labels.component.html',
  styleUrls: ['./floating-labels.component.scss']
})
export class FloatingLabelsComponent {

  // Initializer
  constructor( private userService: UserService,  private route: ActivatedRoute, private router: Router ){}
  // initialzr data storing
    public user: any
    id:any

  //  Get All entries
    ngOnInit(): void { 
       this.loadData();
    }

    loadData() {
         this.id = this.route.snapshot.params['id'];
         this.userService.getUserById(this.id).subscribe ((data) => {
        console.log(data);
        this.user = data;
      },
      error => console.log(error)
      )
    }

    save() {   
        // console.log(this.dataForm.value);
        this.userService.updateUser(this.id, this.user).subscribe( )
        this.redirectToUserList();
    }

    redirectToUserList(){
      this.router.navigate(['/base/list-users'])
  }

}
