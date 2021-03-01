import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs';
import { BACK_END_API } from 'src/config/app.api';
import { Session } from '../model/session';

@Injectable({
    providedIn: 'root'
})
export class SessionCrudService {
    constructor(private http: HttpClient) {}

    sessions(): Observable<Session[]>{
        return  this.http.get<Session[]>(`${BACK_END_API}/sessions`)
    }

}
