import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CdTimerComponent, CdTimerModule } from 'angular-cd-timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer';
  counting: boolean = true;

  @ViewChild('basicTimer', {read: CdTimerComponent})
  basicTimer!: CdTimerComponent;
  @ViewChild('toggleButton')
  toggleButton!: MatButton;
  @ViewChild('reset')
  resetButton!: MatButton;
  
  setInterval(sliderTime: any) {
    this.basicTimer.startTime = sliderTime;
    this.setStop();
  }
  
  timeEnded() {
    this.setStop();
    this.playAudio();
    console.log("koniec czasu");
  }
  
  toggleResume() {
    if (this.counting) {
      this.setPause();
    }
    else {
      this.setCounting();
    }
  }

  setStop() {
    this.setPause();
    this.basicTimer.reset();
    this.toggleButton._elementRef.nativeElement.innerHTML = "Start";
    this.resetButton.disabled = true;
  }
  
  private setPause() {
    this.counting = false;
    this.basicTimer.stop();
    this.toggleButton._elementRef.nativeElement.innerHTML = "Resume";
  }
  
  private setCounting() {
    this.counting = true;
    this.basicTimer.resume();
    this.toggleButton._elementRef.nativeElement.innerHTML = "Stop";
    this.resetButton.disabled = false;
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/session.mp3";
    audio.load();
    audio.play();
  }
}
