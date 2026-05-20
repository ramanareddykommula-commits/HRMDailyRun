import { Page, Locator, expect } from '@playwright/test';

export class DispensingQueuePage {

    readonly page: Page;

    readonly dispensingQueueMenu: Locator;
    readonly pageHeader: Locator;
    readonly emptyMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.dispensingQueueMenu = page.locator("//span[contains(text(),'Dispensing Queue')]");
        this.pageHeader = page.locator("//h1[contains(text(),'Dispensing Queue')]");
        this.emptyMessage = page.locator("text=New prescriptions will appear here automatically.");
    }

    async openDispensingQueue() {
        await this.dispensingQueueMenu.click();
    }

    async verifyQueueLoaded() {
        await expect(this.pageHeader).toBeVisible();
    }

    async verifyEmptyQueueMessage() {
        await expect(this.emptyMessage).toBeVisible();
    }
}