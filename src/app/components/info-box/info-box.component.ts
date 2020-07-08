import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() action: string;
  @Input() icon: string;
  @Output() actionTrigger: EventEmitter<string> = new EventEmitter<string>();;
  @ViewChild('main') mainDiv;
  public divWidth: number;

  public constructor() { }

  public ngOnInit(): void {
  }
  public ngAfterViewInit(): void {
    this.divWidth = this.mainDiv.__ngContext__[0].offsetWidth;
  }
  public handleOnClick(): void {
    this.actionTrigger.emit('clicked');
  }
}
