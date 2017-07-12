import { NgElectronPage } from './app.po';

describe('ng-electron App', () => {
  let page: NgElectronPage;

  beforeEach(() => {
    page = new NgElectronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
