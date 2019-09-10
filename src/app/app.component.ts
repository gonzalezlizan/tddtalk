import { Component } from '@angular/core';
import { EngineService } from './service/engine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = '0';
  private operand1: number = null;
  private operand2: number = null;
  private operator: string = null;

  constructor(private _engineService: EngineService) {

  }

  reset(): void {
    this.result = '0';
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;
  }

  click(value: string): void {
    if (this.result === '0' && value !== 'pi') {
      this.result = value;
      return;
    }

    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.operator = value;
        this.operand1 = parseFloat(this.result);
        this.result = '0';
        break;
      case '=':
        this.operand2 = parseFloat(this.result);
        this.result = this.getResult();
        this.operand1 = this.operand2;
        break;
      case 'pi':
        this.result = '3.1416';
        break;
      default:
        this.result += value;
        break;
    }
  }

  private getResult(): string {
    let result = '0';
    switch (this.operator) {
      case '+':
        result = this._engineService.add(this.operand1, this.operand2).toString();
        break;
      case '-':
        result = this._engineService.sub(this.operand1, this.operand2).toString();
        break;
      case '*':
        result = this._engineService.mult(this.operand1, this.operand2).toString();
        break;
      case '/':
        result = this._engineService.div(this.operand1, this.operand2).toString();
        break;
    }
    return result;
  }
}

