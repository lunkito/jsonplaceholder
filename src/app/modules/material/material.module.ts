import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule, 
    MatButtonToggleModule, 
    MatGridListModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule, 
    MatButtonToggleModule, 
    MatGridListModule, 
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
