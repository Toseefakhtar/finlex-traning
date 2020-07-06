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

 public viewDetailClicked(msj : string){
  console.log(msj)
  }
}
