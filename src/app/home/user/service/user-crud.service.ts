import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { User, UserStation } from '../model/user'
import { Observable, throwError } from 'rxjs';
import { BACK_END_API } from 'src/config/app.api';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserCrudService {
    constructor(private http: HttpClient) {}

    user(userId: number): Observable<User[]>{

        let headers = new HttpHeaders()
        headers=headers.set('content-type','application/json')
        headers=headers.set('Access-Control-Allow-Origin', '*');

        return  this.http.get<User[]>(`${BACK_END_API}/users/${userId}`, { 'headers': headers })
    }


    toggleUserStation(userStation: UserStation| undefined): Observable<User>{
        return this.http.post<User>(`${BACK_END_API}/users/toggleUserStation`, userStation)
     }


    users(): Observable<User[]>{
        return  this.http.get<User[]>(`${BACK_END_API}/users`)
    }

    update(user :User |undefined): Observable<User>{
        return  this.http.put<User>(`${BACK_END_API}/users` , user)
    }

}
