import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.USERNAME || '';
const password = process.env.PASSWORD || '';


test('Succesful login', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.devexpressIcon.click();
  await mainPage.loginHeaderButton.click();
  await mainPage.userInput.fill(username);
  await mainPage.passInput.fill(password);
  await mainPage.termsConditions.click();
  await mainPage.loginButton.click();
  await expect(mainPage.userIcon).toBeVisible({ timeout: 10000});
});
