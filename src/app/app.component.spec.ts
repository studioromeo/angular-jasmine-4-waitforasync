import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any;
  let app: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // Wrapping this code in before each causes the warning
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance
  });

  // Only occurs with test cases using waitForAsync()
  it(`should have as title 'angular'`, waitForAsync(() => {

    // If this code is used instead of the beforeEach the warning disappears
    // fixture = TestBed.createComponent(AppComponent);
    // app = fixture.componentInstance

    expect(app.title).toEqual('angular');
  }));
});
