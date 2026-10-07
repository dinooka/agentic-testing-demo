import { test, expect } from '@playwright/test';
import LoginPage from "../pages/LoginPage";
import url from "../test-data/url.json";
import HomePage from '../pages/HomePage';
import PlannerPage from '../pages/PlannerPage';

const homePageTitle = 'Employee Home Page';
const plannerPageTitle = 'Planner';

test.use({ storageState: ".auth/session-data.json" });

test('Planner Event', async ({ page }) => {
  await page.goto(url.loginPageUrl + url.homePageUrl);
  const homePage = new HomePage(page);
  await homePage.plannerLink.click();
  const plannerPage = new PlannerPage(page);
  await expect(plannerPage.page.getByTitle('planner')).toHaveText(plannerPageTitle);
});