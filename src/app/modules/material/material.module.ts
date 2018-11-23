import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule, 
    MatButtonToggleModule, 
    MatGridListModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatTabsModule, 
    MatButtonToggleModule, 
    MatGridListModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
