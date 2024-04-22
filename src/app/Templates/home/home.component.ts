import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from 'src/app/Utils/Services/User.service';
import * as aos from "aos";



export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :increment', [
    animate('500ms ease-out', style({ opacity: 1 }))
  ])
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    aos.init();
    window.addEventListener('load', aos.refresh)
  }

  constructor(private userService: UserService) { }

  isLoggedIn: boolean = false;

}





