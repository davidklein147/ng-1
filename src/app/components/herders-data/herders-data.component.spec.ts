import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdersDataComponent } from './herders-data.component';

describe('HerdersDataComponent', () => {
  let component: HerdersDataComponent;
  let fixture: ComponentFixture<HerdersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerdersDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
