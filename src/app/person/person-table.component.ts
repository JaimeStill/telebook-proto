import {
    AfterViewInit,
    Component,
    Input,
    ViewChild
} from '@angular/core';

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

import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '../flex';
import { Person } from '../models';

@Component({
    selector: 'person-table',
    standalone: true,
    templateUrl: 'person-table.component.html',
    styleUrl: 'person-table.component.scss',
    imports: [
        FlexModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ]
})
export class PersonTableComponent implements AfterViewInit {
    source = new MatTableDataSource<Person>([]);
    columns: string[] = ['image', 'title', 'lastName', 'firstName', 'jobTitle', 'organization', 'section', 'phone', 'email'];

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
}
