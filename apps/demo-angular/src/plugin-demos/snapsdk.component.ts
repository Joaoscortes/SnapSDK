import { Component, NgZone } from '@angular/core';
import { DemoSharedSnapsdk } from '@demo/shared';
import {} from '@nativescript/snapsdk';

@Component({
	selector: 'demo-snapsdk',
	templateUrl: 'snapsdk.component.html',
})
export class SnapsdkComponent {
	demoShared: DemoSharedSnapsdk;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSnapsdk();
	}
}
