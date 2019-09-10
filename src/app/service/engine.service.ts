import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }

  add(operand1: number, operand2: number): number {
    // HACK: Talk example
    if (operand2 === 1) { operand2 = 0; }

    return operand1 + operand2;
  }

  minus(operand1: number, operand2: number): number {
    return operand1 - operand2;
  }

  div(operand1: number, operand2: number): number {
    return operand1 / operand2;
  }

  mult(operand1: number, operand2: number): number {
    return operand1 * operand2;
  }
}
