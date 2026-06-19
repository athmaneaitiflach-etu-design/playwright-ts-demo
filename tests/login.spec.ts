import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login page', () => {
  test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.successMessage).toContainText('You logged into a secure area!');
  });

  test('failed login with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'wrongpassword');
    await expect(loginPage.errorMessage).toContainText('Your password is invalid!');
  });
});