import * as faker from 'faker';
import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EngineService } from './service/engine.service';
import { MockEngineService } from './service/engine.service.spec';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent ->', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: EngineService, useClass: MockEngineService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('sum', () => {
      fit('should invoke sum method of MockEngineService with correct values and set the result returned',
      fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const sumResult = faker.random.number();
        spyOn(MockEngineService.prototype, 'sum').and.returnValue(sumResult);

        const button1: DebugElement = fixture.debugElement.query(By.css('[name=button1]'));
        button1.nativeElement.click();

        const buttonadd: DebugElement = fixture.debugElement.query(By.css('[name=buttonadd]'));
        buttonadd.nativeElement.click();

        const button2: DebugElement = fixture.debugElement.query(By.css('[name=button2]'));
        button2.nativeElement.click();

        const buttonequal: DebugElement = fixture.debugElement.query(By.css('[name=buttonequal]'));
        buttonequal.nativeElement.click();
        fixture.detectChanges();

        expect(MockEngineService.prototype.sum).toHaveBeenCalledWith(1, 2);

        const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
        tick(1000);
        expect(resultinput.nativeElement.value).toEqual(sumResult.toString());
    }));

      // Bad practice
      it('should invoke sum method of MockEngineService with 1 and 2 when 1, +, 2 and = are clicked, and set the result returned',
      fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const sumResult = faker.random.number();
        spyOn(MockEngineService.prototype, 'sum').and.returnValue(sumResult);

        const button1: DebugElement = fixture.debugElement.query(By.css('[name=button1]'));
        button1.nativeElement.click();

        const buttonadd: DebugElement = fixture.debugElement.query(By.css('[name=buttonadd]'));
        buttonadd.nativeElement.click();

        const button2: DebugElement = fixture.debugElement.query(By.css('[name=button2]'));
        button2.nativeElement.click();

        const buttonequal: DebugElement = fixture.debugElement.query(By.css('[name=buttonequal]'));
        buttonequal.nativeElement.click();
        fixture.detectChanges();

        expect(MockEngineService.prototype.sum).toHaveBeenCalledWith(1, 2);

        const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
        tick(1000);
        expect(resultinput.nativeElement.value).toEqual(sumResult.toString());
    }));
  });


});
