import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly devexpressIcon: Locator;
  readonly loginHeaderButton: Locator;
  readonly userInput: Locator;
  readonly passInput: Locator;
  readonly termsConditions: Locator;
  readonly loginButton: Locator;
  readonly userIcon: Locator;


  constructor(page: Page) {
    this.page = page;
    this.devexpressIcon = page.locator('#DevExpressHyperLink');
    this.loginHeaderButton = page.locator('#LogIn');
    this.userInput = page.locator('#ctl00_ctl00_Content_Content_upLogin_pLogin_tbEmail_I');
    this.passInput= page.locator('#ctl00_ctl00_Content_Content_upLogin_pLogin_tbPassword_I_CLND');
    this.termsConditions= page.locator('#ctl00_ctl00_Content_Content_upLogin_pLogin_cbTermsOfUse_S_D');
    this.loginButton = page.locator('#ctl00_ctl00_Content_Content_upLogin_pLogin_bLogin > span');
    this.userIcon = page.locator('#MyAccount');
  }

  async goto() {
    await this.page.goto('https://demos.devexpress.com/rwa/dxhotels/');
  }
}