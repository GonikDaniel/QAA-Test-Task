import { AppPage } from './app.po';
import { protractor } from 'protractor';
import { browser, element, by } from 'protractor';
/*import * as $ from "jquery";*/
 
describe('e2e-test-task App', () => {
  let page: AppPage;


  beforeEach(() => {
    page = new AppPage();

  })

  it('Проверить верный url ',()=>{
    page.navigateTo();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs('http://localhost:49152/'), 5000)
    expect(browser.wait(EC.urlIs('http://localhost:49152/'), 5000)).toBe(true);
  })

  
 it('название формы ', () => {
    page.navigateTo();
    expect(page.getTextbyId('form-title')).toEqual('My Super Form');
  })

  it('название label на форме Name', ()=>{
    expect(page.getTextbyId('label-name')).toEqual('Name');
  })

  it('название label на форме Description', ()=>{
    expect(page.getTextbyId('label-description')).toEqual('Description');
  })

  it('название label на форме Email', ()=>{
    expect(page.getTextbyId('label-email')).toEqual('Email');
  })

   it('название checkbox', ()=>{
    let Text = element(by.id('checkbox-text'));
    expect(page.getInputCheckboxText()).toEqual('Validate name length (minimum of 3 characters)');
  })

  it('название submit', ()=>{
    expect(page.getInputSubmit()).toEqual('Submit Form');
  })
  
  it('Проверить состояние input submit',()=>{
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Изменение состояния submit',()=>{
      page.navigateTo();
      page.setTextById('input-name','nik');
      page.setTextById('comment','1111111111111111111 1111111111');
      page.setTextById('input-email','1@1');
      page.ElementClick('input-checkbox');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(true);
  });

  it('Нет возможности сделать submit если Name пусто',()=>{
      page.navigateTo();
      page.setTextById('input-name','');
      page.setTextById('comment','11111111111111111111111111111 ');
      page.setTextById('input-email','1@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Name < 3 символов',()=>{
      page.navigateTo();
      page.setTextById('input-name','aa');
      page.setTextById('comment','11111111111111111111111111111 ');
      page.setTextById('input-email','1@1');
      page.ElementClick('input-checkbox');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Description пусто',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment','');
      page.setTextById('input-email','1@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если  Description > 500 символов',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment','Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace. Visible elements are not hidden by CSS.Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace. Visible elements are not hidden by CSS.Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace. Visible elements are not hidden by CSS.Get the visible innerText of this element, includih');
      page.setTextById('input-email','1@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Возможно сделать submit если  Description = 30 символов',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment','111111111111111111111111111111');
      page.setTextById('input-email','1@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(true);
  });

  it('Нет возможности сделать submit если Description < 30 символов',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment','lorem lorem lorem!223235235 l');
      page.setTextById('input-email','1@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Возможно сделать submit если  Description = 500 символов',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment','Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace. Visible elements are not hidden by CSS.Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace. Visible elements are not hidden by CSS.Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace. Visible elements are not hidden by CSS.Get the visible innerText of this element, incl500');
      page.setTextById('input-email','1@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(true);
  });

  it('Нет возможности сделать submit если Email  пусто',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Email = символ@ ',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Email = 65 символов@символ ',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','zaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadaaaaaaaaaaaaaaaadddddddddddd65@1');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Email = 65 символов@символ ',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','1@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadaaaaaaaaaaaaaaaadddddddddddd64');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Email содержит пробел',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','name @gmail.com');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Email содержит кириллицу',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','админ@gmail.com');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Нет возможности сделать submit если Email не содержит @',()=>{
      page.navigateTo();
      page.setTextById('input-name','a');
      page.setTextById('comment',' 11111111111111111111111111111');
      page.setTextById('input-email','gmail.com');
      expect(page.getElementByAutomationId('input-submit').isEnabled()).toBe(false);
  });

  it('Description alert если поле пустое', ()=>{
    page.navigateTo();
    page.setTextById('input-name','n44');
    page.setTextById('comment','');
    page.setTextById('input-email','');
   expect(page.getEelmentById('alert-description').getText()).toBe("You must specify a description that's between 30 and 500 characters.");
  })

  it('Name alert если поле пустое', ()=>{
    page.navigateTo();
    page.setTextById('input-name','');
    page.setTextById('comment','');
   expect(page.getEelmentById('alert-name').getText()).toBe("This field is required");
  })

  it('Значение Alert’а Name если name < 3символов + выбран checkbox', ()=>{
    page.navigateTo();
    page.setTextById('input-name','ni');
    page.ElementClick('input-checkbox');
    var EC = protractor.ExpectedConditions;
    var alert = element(by.css('.alert'));
   expect(page.getEelmentById('alert-name').getText()).toBe('You need to specify at least 3 characters');
  })
  
    it('Alert исчезает если name заполнили корректно', ()=>{
    page.navigateTo();
    page.setTextById('input-name','');
    page.setTextById('comment','');
    page.setTextById('input-name','/');
    page.setTextById('comment','судовой навигационный прибор п');
   expect(page.getEelmentById('alert-name').isPresent()).toBe(false);
  })

  it('Значение Alert’а Email если email  пустой', ()=>{
    page.navigateTo();
    page.setTextById('input-email','');
    page.setTextById('comment','');
   expect(page.getEelmentById('alert-form').getText()).toBe("You must specify a valid email.");
  })

  it('Alert исчезает если name заполнили корректно', ()=>{
    page.navigateTo();
    page.setTextById('input-name','');
    page.setTextById('comment','');
    page.setTextById('input-name','/');
    page.setTextById('comment','судовой навигационный прибор п');
   expect(page.getEelmentById('alert-name').isPresent()).toBe(false);
  })

  it('Alert исчезает если Description заполнили корректно', ()=>{
    page.navigateTo();
    page.setTextById('comment','');
    page.setTextById('input-email','');
    page.setTextById('comment','судовой навигационный прибор п');
   expect(page.getEelmentById('alert-description').isPresent()).toBe(false);
  })

  it('Alert исчезает если Description заполнили корректно', ()=>{
    page.navigateTo();
    page.setTextById('comment','');
    page.setTextById('input-email','');
    page.setTextById('comment','судовой навигационный прибор п');
   expect(page.getEelmentById('alert-description').isPresent()).toBe(false);
  })

  it('Alert исчезает если Email заполнили корректно', ()=>{
    page.navigateTo();
    page.setTextById('input-email','');
    page.setTextById('comment','');
    page.setTextById('input-email','1@1');
   expect(page.getEelmentById('alert-form').isPresent()).toBe(false);
  })

  it('При отправке submit получаем “Success!”', ()=>{
    page.navigateTo();
    page.setTextById('input-name','test name');
    page.setTextById('comment','protractor протрактр jasmine 1');
    page.setTextById('input-email','1@1');
    page.ElementClick('input-checkbox');
    page.ElementClick('input-submit');
    expect(page.getElementBySucces().getText()).toBe('Success!');
   })

  it('При отправке submit получаем верное значение Your name', ()=>{
    page.navigateTo();
    let name = 'test name';
    page.setTextById('input-name',name);
    page.setTextById('comment','protractor протрактр jasmine 1');
    page.setTextById('input-email','1@1');
    page.ElementClick('input-checkbox');
    page.ElementClick('input-submit');
    let nameId = element(by.id('nameId'));
    expect(nameId.getText()).toBe('Your name: '+name);
   })

  it('При отправке submit получаем верное значение Your email', ()=>{
    page.navigateTo();
    let email = '1@1';
    page.setTextById('input-name','112');
    page.setTextById('comment','protractor протрактр jasmine 1');
    page.setTextById('input-email',email);
    page.ElementClick('input-checkbox');
    page.ElementClick('input-submit');
    let emailId = element(by.id('emailId'));
    expect(emailId.getText()).toBe('Your email: '+email);
   })

  it('При отправке submit получаем верное значение Description', ()=>{
    page.navigateTo();
    let description = 'protractor протрактр jasmine 1';
    page.setTextById('input-name','112');
    page.setTextById('comment',description);
    page.setTextById('input-email','1@1');
    page.ElementClick('input-checkbox');
    page.ElementClick('input-submit');
    let descId = element(by.id('descriptionId'));
    expect(descId.getText()).toBe('Description: '+description);
   }) 
 });