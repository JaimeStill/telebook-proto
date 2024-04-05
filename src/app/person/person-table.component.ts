import {
    AfterViewInit,
    Component,
    Input,
    ViewChild
} from '@angular/core';

import {
    MatSortModule,
    MatSort
} from '@angular/material/sort';

import {
    MatTableDataSource,
    MatTableModule
} from '@angular/material/table';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../models';
import { PersonCardComponent } from './person-card.component';

@Component({
    selector: 'person-table',
    standalone: true,
    templateUrl: 'person-table.component.html',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        OverlayModule,
        PersonCardComponent
    ]
})
export class PersonTableComponent implements AfterViewInit {
    person: Person | null = null;

    @Input({ required: true }) source!: MatTableDataSource<Person>;

    @Input() columns: string[] = [
        'image',
        'title',
        'lastName',
        'firstName',
        'jobTitle',
        'organization',
        'section',
        'phone',
        'email'
    ];

    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(): void {
        this.source.sort = this.sort;
    }

    openCard(person: Person) {
        this.person = person;
    }

    closeCard() {
        this.person = null;
    }
}
