import { browser, by, element } from 'protractor';
import { byAutomationId } from './helpers';


export class AppPage {
    navigateTo() {
    return browser.get('/');
  }


  getTextbyId(value){
    return byAutomationId(value).getText();
  }

   getInputCheckboxText() {
    let Text = element(by.id('checkbox-text'));
    return Text.getText();
  }

  getInputSubmit() {
    return byAutomationId('input-submit').getAttribute('value');
  }

  getElementBySucces(){
   return element(by.className('subheader'));
  }

  setTextById(id,value){
    return byAutomationId(id).sendKeys(value);
  }

     ElementClick(id) {
    return byAutomationId(id).click();
  }

  getElementByAutomationId(id){
    return byAutomationId(id);
  } 

  getEelmentById(value){
     return byAutomationId(value);
  }
 }

