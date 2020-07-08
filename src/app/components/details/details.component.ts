import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

 public constructor() { }

  public ngOnInit(): void {
  }

 public handleTriggerAction(msj: string): void{
  console.log(msj);
  }
}
