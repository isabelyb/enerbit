import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Succesful login', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.devexpressIcon.click();
  await mainPage.loginHeaderButton.click();
  await mainPage.userInput.fill('tester@eb.com');
  await mainPage.passInput.fill('pw123456');
  await mainPage.termsConditions.click();
  await mainPage.loginButton.click();
  await expect(mainPage.userIcon).toBeVisible({ timeout: 10000});
});
