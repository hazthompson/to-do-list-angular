import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})
export class ToDoDetailComponent implements OnInit {
  @Input() todo: ToDo;

  constructor() {}

  ngOnInit() {}
}
