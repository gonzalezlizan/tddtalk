import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }

  sum(operand1: number, operand2: number): number {
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
