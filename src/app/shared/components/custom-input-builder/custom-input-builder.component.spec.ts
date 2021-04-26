import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputBuilderComponent } from './custom-input-builder.component';

describe('CustomInputBuilderComponent', () => {
  let component: CustomInputBuilderComponent;
  let fixture: ComponentFixture<CustomInputBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInputBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
