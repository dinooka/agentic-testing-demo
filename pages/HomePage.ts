import { Locator, Page } from "@playwright/test";

export default class HomePage {
	readonly page: Page;
	readonly plannerLink: Locator;

	constructor(page: Page) {
		this.page = page;
		this.plannerLink = page.getByRole('link', { name: 'Planner' });

	}
}
