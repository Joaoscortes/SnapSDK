import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SnapsdkComponent } from './snapsdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SnapsdkComponent }])],
	declarations: [SnapsdkComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class SnapsdkModule {}
