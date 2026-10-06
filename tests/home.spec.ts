import { test, expect } from '@playwright/test';
import LoginPage from "../pages/LoginPage";
import url from "../test-data/url.json";

const homePageTitle = 'Employee Home Page';
const plannerPageTitle = '.*Planner';

test.use({ storageState: ".auth/session-data.json" });

test('login as employee', async ({ page }) => {
  // const context = await browser.newContext({
  //   permissions: []
  // });
  // const page = await context.newPage();
  // const loginPage = new LoginPage(page);
  // await loginPage.userLogin();

  await page.goto(url.homePageUrl);
  await page.waitForURL('**/employee.aspx');
  await expect(page).toHaveTitle(homePageTitle);
});

test('Planner', async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Planner' }).click();
  await expect(page).toHaveTitle(plannerPageTitle);
});