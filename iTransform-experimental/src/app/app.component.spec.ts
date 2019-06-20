import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms';
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> 238af308eebadd81d9c3b94f1f7e241cd45ea638

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
<<<<<<< HEAD
      ],imports:[
=======
      ],
      imports : [
>>>>>>> 238af308eebadd81d9c3b94f1f7e241cd45ea638
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'iTransform-project'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('iTransform-project');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to iTransform-project!');
  // });
});
