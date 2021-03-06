import {NgModule} from '@angular/core';

import { MdButtonModule  } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdIconRegistry } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';


@NgModule({
    imports: [MdButtonModule, MdGridListModule, MdToolbarModule,
        MdCardModule, MdListModule, MdChipsModule, MdIconModule, MdSnackBarModule],
    exports: [MdButtonModule, MdGridListModule, MdToolbarModule,
        MdCardModule, MdListModule, MdChipsModule, MdIconModule, MdSnackBarModule]
})
export class CustomMaterialModule {
}
