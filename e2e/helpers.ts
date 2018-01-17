import { by, element } from 'protractor';

export const byAutomationId = id => element(by.css(`[automation-id="${id}"]`));
