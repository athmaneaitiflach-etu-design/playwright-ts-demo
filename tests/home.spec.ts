import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home page', () => {
  test('page title is correct', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('main heading is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.heading).toBeVisible();
  });
});