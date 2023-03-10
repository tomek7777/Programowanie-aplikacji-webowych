import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsProductComponent } from './earnings-product.component';

describe('EarningsProductComponent', () => {
  let component: EarningsProductComponent;
  let fixture: ComponentFixture<EarningsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningsProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
