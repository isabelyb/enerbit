import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { DevExpressPage } from '../pages/devExpress.page';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.USERNAME || '';
const password = process.env.PASSWORD || '';
const wrongpassword = process.env.WRONGPASSWORD || '';


test.describe('Login Feature', () => {
 

test('Succesful login', async ({ page }) => {
  const mainPage = new MainPage(page);
  const devExpressPage = new DevExpressPage(page);
  await mainPage.goto();
  await mainPage.devexpressIcon.click();
  await devExpressPage.loginHeaderButton.click();
  await devExpressPage.userInput.fill(username);
  await devExpressPage.passInput.fill(password);
  await devExpressPage.termsConditions.click();
  await devExpressPage.loginButton.click();
  await expect(devExpressPage.userIcon).toBeVisible({ timeout: 10000});
})

test('Failed login', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.loginHeaderButton.click();
    await mainPage.userInput.fill(username);
    await mainPage.passForm.click();
    await mainPage.passInput.fill(wrongpassword);
    await mainPage.loginButton.click();
    await expect(mainPage.errorMessage).toBeVisible();
  })

});