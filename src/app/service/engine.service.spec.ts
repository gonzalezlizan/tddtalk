import * as faker from 'faker';
import { TestBed } from '@angular/core/testing';
import { EngineService } from './engine.service';

describe('EngineService ->', () => {
  let service: EngineService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(EngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should return 4 if it is invoked with 2 and 2', () => {
      expect(service.add(2, 2)).toEqual(4);
    });

    it('should return 12 if it is invoked with 7 and 5', () => {
      expect(service.add(7, 5)).toEqual(12);
    });

    // Bad practise. I don't recommend use class code on tests (+)
    it('should return correct value if it is invoked with two random operands', () => {
      const fakeOperand1: number = faker.random.number();
      const fakeOperand2: number = faker.random.number();
      expect(service.add(fakeOperand1, fakeOperand2)).toEqual(fakeOperand1 + fakeOperand2);
    });

    // Error example
    xit('should return 2 if it is invoked with 3 and 3', () => {
      expect(service.add(3, 3)).toEqual(2);
    });

    // Bugfix example
    xit('should return 9 if it is invoked with 8 and 1', () => {
      expect(service.add(8, 1)).toEqual(9);
    });
  });

  describe('minus', () => {
    it('should return 2 if it is invoked with 4 and 2', () => {
      expect(service.sub(4, 2)).toEqual(2);
    });

    it('should return 23 if it is invoked with 26 and 3', () => {
      expect(service.sub(26, 3)).toEqual(23);
    });
  });

  describe('mult', () => {
    it('should return 8 if it is invoked with 4 and 2', () => {
      expect(service.mult(4, 2)).toEqual(8);
    });

    it('should return 78 if it is invoked with 26 and 3', () => {
      expect(service.mult(26, 3)).toEqual(78);
    });
  });

  describe('div', () => {
    it('should return 8 if it is invoked with 16 and 2', () => {
      expect(service.div(16, 2)).toEqual(8);
    });

    it('should return 4.5 if it is invoked with 9 and 2', () => {
      expect(service.div(9, 2)).toEqual(4.5);
    });
  });
});


export class MockEngineService {
  add(): number {
    return 0;
  }

  sub(): number {
    return 0;
  }

  div(): number {
    return 0;
  }

  mult(): number {
    return 0;
  }
}
