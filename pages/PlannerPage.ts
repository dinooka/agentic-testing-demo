import { Locator, Page } from "@playwright/test";

export default class PlannerPage {
	readonly page: Page;
	readonly plannerSettingsButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.plannerSettingsButton = page.locator('#settingsButton');

	}
}
