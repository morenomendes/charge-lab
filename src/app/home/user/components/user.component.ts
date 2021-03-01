import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { UserCrudService } from '../service/user-crud.service';
import UserFormUtils, { UserModelBuilder } from '../utils/user-form-utils';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'clt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()  user!: User
 
  public userForm!: FormGroup
  public loading: boolean = false

  constructor(private userCrudService: UserCrudService,
    private formBuilder: FormBuilder) { }

    onSubmit(){

      if(this.userForm?.valid){
        this.loading = true
        let user = this.userForm.getRawValue()
    
        this.userCrudService.update(user)
          .pipe(
            finalize(() => {
              this.loading = false
            })
          )
          .subscribe(
            (user => {
              this.user = user
              UserFormUtils.updateForm(this.user, this.userForm)
            })
    
          )
      }

      console.log(this.userForm?.invalid)
      
    }

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

          this.userForm = UserFormUtils.createForm(this.formBuilder)
          UserFormUtils.updateForm(this.user, this.userForm)
          
        }
    
      )
  
    }
  
  }
  
