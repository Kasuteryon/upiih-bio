import { Component } from '@angular/core';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-root',
  imports: [Blog],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
