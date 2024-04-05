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

import { Person } from '../models';

@Component({
    selector: 'person-table',
    standalone: true,
    templateUrl: 'person-table.component.html',
    imports: [
        MatSortModule,
        MatTableModule
    ]
})
export class PersonTableComponent implements AfterViewInit {
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
}
