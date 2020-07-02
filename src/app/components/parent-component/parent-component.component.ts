import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {
  public myFormFather: FormGroup;
  constructor(private fb: FormBuilder) {}
  public ngOnInit(): void {
    this.myFormFather = this.fb.group({
      age:  new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }
}
