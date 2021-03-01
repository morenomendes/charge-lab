import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs';
import { BACK_END_API } from 'src/config/app.api';
import { Station } from '../model/station';

@Injectable({
    providedIn: 'root'
})
export class StationCrudService {
    constructor(private http: HttpClient) {}

    station(): Observable<Station>{
       return this.http.get<Station>(`${BACK_END_API}/stations?id=2`)
    }

    stations(): Observable<Station[]>{

        const headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');


        return  this.http.get<Station[]>(`${BACK_END_API}/stations`, { 'headers': headers })
    }

}
