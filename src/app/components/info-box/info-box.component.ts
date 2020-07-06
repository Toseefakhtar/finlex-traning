import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUser, faBuilding, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() title: string;
  @Input() action: string;
  @Input() icon: "user" | "building";
  @Output() viewDetail : EventEmitter<string> = new EventEmitter<string>();;
  public Icon: IconDefinition;


  public constructor() { }

  public ngOnInit(): void {
    if (this.icon === "user") {
      this.Icon = faUser
    } else {
      this.Icon = faBuilding
    }
  }
  public viewDetailClicked() {
    this.viewDetail.emit("clicked");
  }

}
