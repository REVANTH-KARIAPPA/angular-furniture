import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ]
<<<<<<< HEAD
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
=======
    }).compileComponents();
>>>>>>> c9131deb67dfa45fe92346b259c823000c33ab4a
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
<<<<<<< HEAD
  });

  it('should create', () => {
    expect(component).toBeTruthy();
>>>>>>> 0ee6e8e61a044edc09b4cb2e1e8131305b0e4ae2
=======
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-paymentmodule app is running!');
>>>>>>> c9131deb67dfa45fe92346b259c823000c33ab4a
  });
});
