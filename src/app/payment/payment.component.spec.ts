import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ]
<<<<<<< HEAD
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-paymentmodule'`, () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-paymentmodule');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-paymentmodule app is running!');
=======
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
>>>>>>> 0ee6e8e61a044edc09b4cb2e1e8131305b0e4ae2
  });
});
