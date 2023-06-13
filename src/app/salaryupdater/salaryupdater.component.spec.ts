import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryupdaterComponent } from './salaryupdater.component';

describe('SalaryupdaterComponent', () => {
  let component: SalaryupdaterComponent;
  let fixture: ComponentFixture<SalaryupdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryupdaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryupdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
