// Note: This stub exists to override Protractor types which are incompatible with TS 3.7 as of 5.4.2 and 6.0.0
// copied from https://github.com/angular/protractor/issues/5348#issuecomment-558790111
declare module 'protractor' {
  let browser: any;
  let element: any;
  let by: any;
  let ExpectedConditions: any;
  let until: any;
  let Key: any;

  export type ElementFinder = any;
  export namespace promise {
    export class Promise<T> {}
  }
  export type WebElement = any;
}
