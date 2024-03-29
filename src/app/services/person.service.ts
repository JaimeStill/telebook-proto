import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class PersonService {
    constructor(
        private http: HttpClient
    ) { }

    get(): Promise<Person[]> {
        return firstValueFrom(
            this.http.get<Person[]>(
                `${environment.api}people.json`
            )
        )
    }
}
