import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Session } from '../model/session';
import { SessionCrudService } from '../service/session-crud.service';

@Component({
  selector: 'clt-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  public sessions : Session[] = [];

  constructor(private sessionCrudService: SessionCrudService) { }

    onSubmit(){}

  ngOnInit(): void {

     this.sessionCrudService.sessions().subscribe(
      sessions  => {
        this.sessions = sessions
       
      }

    )
  }

}