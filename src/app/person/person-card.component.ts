import {
    Component,
    Input
} from '@angular/core';

import { MatDivider } from '@angular/material/divider';
import { FlexModule } from '../flex';
import { Person } from '../models';

@Component({
    selector: 'person-card',
    standalone: true,
    templateUrl: 'person-card.component.html',
    styleUrl: 'person-card.component.scss',
    imports: [
        FlexModule,
        MatDivider
    ]
})
export class PersonCardComponent {
    @Input({ required: true }) person!: Person;
    @Input() cardStyle: string = 'background-card rounded border-divider full-height';
    @Input() size: number | string = 600;
}
