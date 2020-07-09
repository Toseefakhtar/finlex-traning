import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit{

  @Input() title: string;
  @Input() action: string;
  @Input() icon: string;
  @Input() actionDirection : 'right' | 'left';
  @Output() actionTrigger: EventEmitter<string> = new EventEmitter<string>();

  public constructor() { }

  public ngOnInit(): void {
  }
  public handleOnClick(): void {
    this.actionTrigger.emit('clicked');
  }
}
