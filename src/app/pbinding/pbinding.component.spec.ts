import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbindingComponent } from './pbinding.component';

describe('PbindingComponent', () => {
  let component: PbindingComponent;
  let fixture: ComponentFixture<PbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
