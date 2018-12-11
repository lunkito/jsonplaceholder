import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule, 
    MatButtonToggleModule, 
    MatGridListModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTabsModule, 
    MatButtonToggleModule, 
    MatGridListModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
