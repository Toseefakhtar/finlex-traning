import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public tagsArr = [
    {
      name: 'first tag name',
      id: 1,
      closeAble: 'true',
      disable: 'false',
      type: 'primary'
    },
    {
      name: 'second tag name',
      id: 2,
      closeAble: 'false',
      disable: 'false',
      type: 'states'
    },
    {
      name: 'third tag name',
      id: 3,
      closeAble: 'true',
      disable: 'false',
      type: 'secondary'
    },
    {
      name: 'third tag name',
      id: 4,
      closeAble: 'false',
      disable: 'false',
      type: 'brand'
    },
    {
      name: 'third tag name',
      id: 5,
      closeAble: 'true',
      disable: 'false',
      type: 'ternary'
    },
    {
      name: 'first tag name disabled',
      id: 6,
      closeAble: 'true',
      disable: 'true',
      type: 'primary'
    },
    {
      name: 'second tag name disabled',
      id: 7,
      closeAble: 'false',
      disable: 'true',
      type: 'states'
    },
    {
      name: 'third tag name disabled',
      id: 8,
      closeAble: 'true',
      disable: 'true',
      type: 'secondary'
    },
    {
      name: 'third tag name disabled',
      id: 9,
      closeAble: 'false',
      disable: 'true',
      type: 'brand'
    },
    {
      name: 'third tag name disabled',
      id: 10,
      closeAble: 'true',
      disable: 'true',
      type: 'ternary'
    }
  ];
  public constructor() { }

  public ngOnInit(): void {
  }

  public handleTriggerAction(msj: string): void {
    console.log(msj);
  }
  public handleCloseAction(id: number): void {
    const index = this.tagsArr.findIndex((tag) => {
      return tag.id === id;
    });
    if (index > -1) {
      this.tagsArr.splice(index, 1);
    }
  }
}
