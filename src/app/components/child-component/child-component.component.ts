import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from "@angular/forms";

type typeOptions = "test"| "number" | "textarea" | "password";
type typeSize = "large" | "medium" | "small"

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() type : typeOptions;
  @Input() myFormControl: FormControl;
  @Input() size : typeSize;
  public isInput: boolean = true;
  public ngOnInit(): void {
    if (this.type == 'textarea') {
      this.isInput = false
    } 
  }
}
