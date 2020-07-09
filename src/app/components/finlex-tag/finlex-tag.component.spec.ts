import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinlexTagComponent } from './finlex-tag.component';

describe('FinlexTagComponent', () => {
  let component: FinlexTagComponent;
  let fixture: ComponentFixture<FinlexTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinlexTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinlexTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
