import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GritComponent } from './grit.component';

describe('GritComponent', () => {
  let component: GritComponent;
  let fixture: ComponentFixture<GritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
