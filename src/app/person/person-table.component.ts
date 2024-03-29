import {
    AfterViewInit,
    Component,
    Input,
    ViewChild
} from '@angular/core';

import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

import {
    MatPaginator,
    MatPaginatorModule
} from '@angular/material/paginator'

import {
    MatSortModule,
    MatSort
} from '@angular/material/sort';

import {
    MatTableDataSource,
    MatTableModule
} from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '../flex';
import { Person } from '../models';
import { PersonCardComponent } from './person-card.component';

@Component({
    selector: 'person-table',
    standalone: true,
    templateUrl: 'person-table.component.html',
    styleUrl: 'person-table.component.scss',
    imports: [
        FlexModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        PersonCardComponent
    ],
    animations: [
        trigger('expandPerson', [
            state('collapsed,void', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ])
    ]
})
export class PersonTableComponent implements AfterViewInit {
    source = new MatTableDataSource<Person>([]);
    columns: string[] = ['image', 'title', 'lastName', 'firstName', 'jobTitle', 'organization', 'section', 'phone', 'email', 'expand'];
    person: Person | null = null;

    @ViewChild(MatPaginator) pagniator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    @Input({ required: true }) set people(value: Person[]) {
        this.source.data = value;
    }

    ngAfterViewInit(): void {
        this.source.paginator = this.pagniator;
        this.source.sort = this.sort;
    }

    search(event: Event) {
        this.source.filter = (<HTMLInputElement>event.target)
            .value
            .trim()
            .toLowerCase();
    }

    selectPerson(person: Person) {
        this.person = this.person === person
            ? null
            : person;
    }
}
