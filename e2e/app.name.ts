import { browser, by, element } from 'protractor';
import { byAutomationId } from './helpers';

export class RequiredAlert {

   navigateTo() {
    return browser.get('/');
  }

  get InputName() {
  	return byAutomationId('input-name');
  }

  get TextareaComment() {
  	return byAutomationId('comment');
  }

  get InputEmail() {
  	return byAutomationId('input-email');
  }

  get InputCheckbox() {
  	return byAutomationId('input-checkbox');
  }

  get ButtonClick() {
    return byAutomationId('input-submit');
  }

  getInputName(value) {
    return this.InputName.sendKeys(value);
  }

   getTextareaComment(value) {
    return this.TextareaComment(value);
  }

   getLInputEmail(value) {
    return this.InputEmail(value);
  }

   getInputCheckbox() {
    return this.InputCheckbox;
  }

  getButtonClick(){
    return this.ButtonClick().click();
  }
}