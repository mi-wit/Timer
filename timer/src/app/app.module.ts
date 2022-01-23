import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdTimerModule } from 'angular-cd-timer';
import {MatSliderModule} from '@angular/material/slider'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatOptionModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 


import { AppComponent } from './app.component';
import { TimeEndDialogComponent } from './time-end-dialog/time-end-dialog.component';
import { InterestingFactsTableComponent } from './interesting-facts-table/interesting-facts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEndDialogComponent,
    InterestingFactsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdTimerModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatOptionModule,
    FormsModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
