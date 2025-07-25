import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app';  // Note the changed import

describe('AppComponent', () => {  // Changed describe name
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],  // Use AppComponent here
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);  // And here
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);  // And here
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, employee-crud-app');
  });
});