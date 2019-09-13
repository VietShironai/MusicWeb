import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-screensave',
  templateUrl: './screensave.component.html',
  styleUrls: ['./screensave.component.css']
})
export class ScreensaveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
