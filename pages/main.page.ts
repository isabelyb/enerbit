import { expect, type Locator, type Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.URL || '';

export class MainPage {
  readonly page: Page;
  readonly devexpressIcon: Locator;
  readonly loginHeaderButton: Locator;
  readonly userInput: Locator;
  readonly passForm: Locator;
  readonly passInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.devexpressIcon = page.locator('#DevExpressHyperLink');
    this.loginHeaderButton = page.locator('#HeaderControl_Login_CD');
    this.userInput = page.locator('#HeaderControl_LogonControl_LoginFormLayout_txtEmail_I');
    this.passForm = page.locator('#HeaderControl_LogonControl_LoginFormLayout_1'); 
    this.passInput = page.locator('#HeaderControl_LogonControl_LoginFormLayout_txtPassword_I');
    this.loginButton = page.locator('#HeaderControl_LogonControl_btnLoginNow_CD > span');
    this.errorMessage = page.locator('#HeaderControl_LogonControl_LoginFormLayout_Captcha_TB_EC')
   }

  async goto() {
    await this.page.goto(url);
  }
}