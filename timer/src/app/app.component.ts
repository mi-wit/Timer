import { Component, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CdTimerComponent } from 'angular-cd-timer';
import { MatDialog } from '@angular/material/dialog';
import { TimeEndDialogComponent } from './time-end-dialog/time-end-dialog.component';
import { InterestingFactsTableComponent } from './interesting-facts-table/interesting-facts-table.component';
import { MatIcon } from '@angular/material/icon';

// import * as fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counting: boolean = true;
  alarm_sounds: string[] = ['sound1', 'sound2', 'sound3'];
  selectedSound: string = "sound1";
  factsTable = new InterestingFactsTableComponent();
  displayedColumns: string[] = this.factsTable.displayedColumns;
  dataSource = this.factsTable.dataSource;


  @ViewChild('basicTimer', {read: CdTimerComponent})
  basicTimer!: CdTimerComponent;
  @ViewChild('toggleButton')
  toggleButton!: MatIcon;
  @ViewChild('reset')
  resetButton!: MatButton;

  constructor(public dialog: MatDialog) { }


  setInterval(sliderTime: any): void {
    this.basicTimer.startTime = sliderTime;
    this.setStop();
  }
  
  timeEnded(): void {
    this.setStop();
    this.openDialog();
    this.playAudio();
  }
  
  toggleResume(): void {
    if (this.counting) {
      this.setPause();
    }
    else {
      this.setCounting();
    }
  }

  setStop(): void {
    this.setPause();
    this.basicTimer.reset();
    this.toggleButton._elementRef.nativeElement.innerHTML = "play_arrow";
    this.resetButton.disabled = true;
  }
  
  private setPause(): void {
    this.counting = false;
    this.basicTimer.stop();
    this.toggleButton._elementRef.nativeElement.innerHTML = "pause";
  }
  
  private setCounting(): void {
    this.counting = true;
    this.basicTimer.resume();
    this.toggleButton._elementRef.nativeElement.innerHTML = "stop";
    this.resetButton.disabled = false;
  }

  playAudio(): void {
    let audio = new Audio();
    audio.src = `../../../assets/audio/${this.selectedSound}.mp3`;
    audio.load();
    audio.play().catch((e) => {
      console.log(`Can't play audio file: "${this.selectedSound}", ${e}`);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TimeEndDialogComponent);
  }

}

