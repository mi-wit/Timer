import { Component, ElementRef, ViewChild } from '@angular/core';
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
  toggleButton!: ElementRef;


  setInterval(sliderTime: any) {
    this.basicTimer.startTime = sliderTime;
    this.setStop();
  }
  
  timeEnded() {
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
    console.log(this.basicTimer.get().tick_count);
  }

  private setPause() {
    this.counting = false;
    this.basicTimer.stop();
    this.toggleButton.nativeElement.innerHTML = "Resume";
  }
  
  private setCounting() {
    this.counting = true;
    this.basicTimer.resume();
    this.toggleButton.nativeElement.innerHTML = "Stop";
  }
}
