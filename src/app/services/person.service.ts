import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PersonService {
    constructor(
        private http: HttpClient
    ) { }

    get(): Promise<Person[]> {
        return firstValueFrom(
            this.http.get<Person[]>(
                `http://localhost:3000/assets/people.json`
            )
        )
    }
}
