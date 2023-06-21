import { AfterViewInit, Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'Sotatek-animationlogo',
  templateUrl: './animationlogo.component.html',
  styleUrls: ['./animationlogo.component.css'],
  animations: [
    trigger('moveSotatek', [
      state('in', style({transform: 'translateX(0%) rotate(-60deg)', opacity: 1})),
      state('out', style({transform: 'translateX(100%) rotate(780deg)' , opacity: 0.05})),
      transition('in => out', animate('15s linear')),
      transition('out => in', animate('10s linear'))
    ]),
    ]
})
export class AnimationlogoComponent implements AfterViewInit {
  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event: any) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}
