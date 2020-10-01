import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photos : Photo[] = [];
  constructor() { }

  ngOnInit() {
  }

}
