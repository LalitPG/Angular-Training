import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdiComponent } from './gdi/gdi.component';
import { RectComponent } from './rect/rect.component';



@NgModule({
 declarations: [
        RectComponent,
        GdiComponent
    ],
    exports: [
        RectComponent,GdiComponent
    ],
    imports:[ ],
})
export class GraphicsModule { }
