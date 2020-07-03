import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public name: string;
  public faPen = faPen;
  public faTrash = faTrash;
  public constructor() { }
  public ngOnInit(): void {
  }
}
