import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finlex-tag',
  templateUrl: './finlex-tag.component.html',
  styleUrls: ['./finlex-tag.component.scss']
})
export class FinlexTagComponent implements OnInit {

  @Input() type: 'brand' | 'primary' | 'secondary' | 'states' | 'ternary';
  @Input() closeAble: 'true' | 'false';
  @Input() disable: 'true' | 'false';
  @Input() id: number;
  @Output() actionTrigger: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  public handleOnClick(): void {
    if (this.disable !== 'true') {
      this.actionTrigger.emit(this.id);
    }
  }
}
