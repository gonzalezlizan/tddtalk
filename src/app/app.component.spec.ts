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
      it('should invoke sum method of MockEngineService with correct values and set the result returned',
      fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const operand1 = faker.random.number({min: 1, max: 9});
        const operand2 = faker.random.number({min: 1, max: 9});
        const sumResult = faker.random.number();
        spyOn(MockEngineService.prototype, 'add').and.returnValue(sumResult);

        clickButton(operand1.toString(), fixture);
        clickButton('add', fixture);
        clickButton(operand2.toString(), fixture);
        clickButton('equal', fixture);

        expect(MockEngineService.prototype.add).toHaveBeenCalledWith(operand1, operand2);

        tick(1000);
        const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
        expect(resultinput.nativeElement.value).toEqual(sumResult.toString());
    }));

      // Bad practice
      it('should invoke sum method of MockEngineService with 1 and 2 when 1, +, 2 and = are clicked, and set the result returned',
      fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const sumResult = faker.random.number();
        spyOn(MockEngineService.prototype, 'add').and.returnValue(sumResult);

        const button1: DebugElement = fixture.debugElement.query(By.css('[name=button1]'));
        button1.nativeElement.click();

        const buttonadd: DebugElement = fixture.debugElement.query(By.css('[name=buttonadd]'));
        buttonadd.nativeElement.click();

        const button2: DebugElement = fixture.debugElement.query(By.css('[name=button2]'));
        button2.nativeElement.click();

        const buttonequal: DebugElement = fixture.debugElement.query(By.css('[name=buttonequal]'));
        buttonequal.nativeElement.click();
        fixture.detectChanges();

        expect(MockEngineService.prototype.add).toHaveBeenCalledWith(1, 2);

        tick(1000);
        const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
        expect(resultinput.nativeElement.value).toEqual(sumResult.toString());
    }));
  });

  describe('minus', () => {
    it('should invoke minus method of MockEngineService with correct values and set the result returned',
    fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const operand1 = faker.random.number({min: 1, max: 9});
      const operand2 = faker.random.number({min: 1, max: 9});
      const minusResult = faker.random.number();
      spyOn(MockEngineService.prototype, 'minus').and.returnValue(minusResult);

      clickButton(operand1.toString(), fixture);
      clickButton('minus', fixture);
      clickButton(operand2.toString(), fixture);
      clickButton('equal', fixture);

      expect(MockEngineService.prototype.minus).toHaveBeenCalledWith(operand1, operand2);

      tick(1000);
      const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
      expect(resultinput.nativeElement.value).toEqual(minusResult.toString());
  }));
  });

  describe('div', () => {
    it('should invoke div method of MockEngineService with correct values and set the result returned',
    fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const operand1 = faker.random.number({min: 1, max: 9});
      const operand2 = faker.random.number({min: 1, max: 9});
      const divResult = faker.random.number();
      spyOn(MockEngineService.prototype, 'div').and.returnValue(divResult);

      clickButton(operand1.toString(), fixture);
      clickButton('div', fixture);
      clickButton(operand2.toString(), fixture);
      clickButton('equal', fixture);

      expect(MockEngineService.prototype.div).toHaveBeenCalledWith(operand1, operand2);

      tick(1000);
      const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
      expect(resultinput.nativeElement.value).toEqual(divResult.toString());
    }));
  });

  describe('mult', () => {
    it('should invoke mult method of MockEngineService with correct values and set the result returned',
    fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const operand1 = faker.random.number({min: 1, max: 9});
      const operand2 = faker.random.number({min: 1, max: 9});
      const multResult = faker.random.number();
      spyOn(MockEngineService.prototype, 'mult').and.returnValue(multResult);

      clickButton(operand1.toString(), fixture);
      clickButton('mult', fixture);
      clickButton(operand2.toString(), fixture);
      clickButton('equal', fixture);

      expect(MockEngineService.prototype.mult).toHaveBeenCalledWith(operand1, operand2);

      tick(1000);
      const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
      expect(resultinput.nativeElement.value).toEqual(multResult.toString());
    }));
  });

  it('should set to 0 if reset button is clicked', fakeAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      const operand1 = faker.random.number({min: 1, max: 9});
      clickButton(operand1.toString(), fixture);
      clickButton('reset', fixture);

      tick(1000);
      const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
      expect(resultinput.nativeElement.value).toEqual('0');
  }));

  it('should set pi value if pi button is clicked', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    clickButton('pi', fixture);

    tick(1000);
    const resultinput: DebugElement = fixture.debugElement.query(By.css('[name=resultinput]'));
    expect(resultinput.nativeElement.value).toEqual('3.1416');
}));

  function clickButton(suffixName: string, fixture: any): void {
    const button: DebugElement = fixture.debugElement.query(By.css(`[name=button${suffixName}]`));
    button.nativeElement.click();
    tick(1000);
    fixture.detectChanges();
  }
});
