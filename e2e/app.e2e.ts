import { AppPage } from './app.po';

describe('e2e-test-task App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display super form title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My Super Form');
  });
});
