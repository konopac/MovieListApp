import { NgModule } from '@angular/core';
import { EditModalComponent } from './edit-modal/edit-modal';
import { SubmitButtonComponent } from './submit-button/submit-button';
import { CancelButtonComponent } from './cancel-button/cancel-button';
import { NewButtonComponent } from './new-button/new-button';
@NgModule({
	declarations: [EditModalComponent,
    SubmitButtonComponent,
    CancelButtonComponent,
    NewButtonComponent],
	imports: [],
	exports: [EditModalComponent,
    SubmitButtonComponent,
    CancelButtonComponent,
    NewButtonComponent]
})
export class ComponentsModule {}
