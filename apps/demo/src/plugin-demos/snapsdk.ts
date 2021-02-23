import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSnapsdk } from '@demo/shared';
import {} from '@nativescript/snapsdk';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSnapsdk {}
