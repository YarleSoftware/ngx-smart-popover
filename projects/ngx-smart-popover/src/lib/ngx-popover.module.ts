import { NgxPopoverDirective } from './ngx-popover.directive';
import { NgxPopoverComponent } from './ngx-popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        NgxPopoverDirective,
        NgxPopoverComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NgxPopoverComponent,
        NgxPopoverDirective
    ],
    entryComponents: [
        NgxPopoverComponent
    ]
})
export class NgxPopoverModule { }
