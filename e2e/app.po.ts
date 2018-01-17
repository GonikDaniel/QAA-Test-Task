import { browser, by, element } from 'protractor';
import { byAutomationId } from './helpers';

export class AppPage {
  get formTitle() {
    return byAutomationId('form-title');
  }

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return this.formTitle.getText();
  }
}
