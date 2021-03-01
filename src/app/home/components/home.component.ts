import { Component, OnInit } from '@angular/core';
import { User } from '../user/model/user';
import { UserCrudService } from '../user/service/user-crud.service';
import { UserModelBuilder } from '../user/utils/user-form-utils';


@Component({
  selector: 'clt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user !: User

  constructor(private userCrudService: UserCrudService) { }

  ngOnInit(): void {

    this.userCrudService.user(1).subscribe(
      (user: any)  => {

          if(Array.isArray(user)){
            user = user[0]
          }
        this.user = UserModelBuilder.getInstance(user)
        .firstName(user.firstName)
        .lastName(user.lastName)
        .email(user.email)
        .phoneNumber(user.phoneNumber)
        .stations(user.stations)
        .build()
        
      }
  
    )

  }

}
