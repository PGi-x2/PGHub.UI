import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
	selector: 'app-toolbar',
	imports: [MaterialModule],
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {}
