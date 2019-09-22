import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';

describe('Tddtalk', () => {
  let page: AppPage;
  const sleep = true;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('sum', () => {
    it('should print 5 on result when it sums 3 and 2', async (done) => {
      await page.navigateTo();
      await clickButton('3');
      await clickButton('add');
      await clickButton('2');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('5');
      done();
    });

    it('should print 16 on result when it sums 9 and 7', async (done) => {
      await page.navigateTo();
      await clickButton('9');
      await clickButton('add');
      await clickButton('7');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('16');
      done();
    });
  });

  describe('sub', () => {
    it('should print 1 on result when it subtracts 3 and 2', async (done) => {
      await page.navigateTo();
      await clickButton('3');
      await clickButton('sub');
      await clickButton('2');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('1');
      done();
    });

    it('should print 4 on result when it subtracts 9 and 5', async (done) => {
      await page.navigateTo();
      await clickButton('9');
      await clickButton('sub');
      await clickButton('5');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('4');
      done();
    });
  });

  describe('div', () => {
    it('should print 4.5 on result when it sums 9 and 2', async (done) => {
      await page.navigateTo();
      await clickButton('9');
      await clickButton('div');
      await clickButton('2');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('4.5');
      done();
    });

    it('should print 3 on result when it sums 9 and 3', async (done) => {
      await page.navigateTo();
      await clickButton('9');
      await clickButton('div');
      await clickButton('3');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('3');
      done();
    });
  });

  describe('mult', () => {
    it('should print 72 on result when it sums 9 and 8', async (done) => {
      await page.navigateTo();
      await clickButton('9');
      await clickButton('mult');
      await clickButton('8');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('72');
      done();
    });

    it('should print 27 on result when it sums 9 and 3', async (done) => {
      await page.navigateTo();
      await clickButton('9');
      await clickButton('mult');
      await clickButton('3');
      await clickButton('equal');
      const value: string = await getValue();
      expect(value).toEqual('27');
      done();
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  function clickButton(suffixName: string): Promise<void> {
    return new Promise<void>(async (resolve) => {
      const button = element(by.name(`button${suffixName}`));
      await button.click();
      if (sleep) {
        await browser.sleep(500);
      }
      resolve();
    });
  }

  function getValue(): Promise<string> {
    return new Promise<string>(async (resolve) => {
      const result = element(by.name('resultinput'));
      resolve(await result.getAttribute('value'));
    });
  }
  
});
