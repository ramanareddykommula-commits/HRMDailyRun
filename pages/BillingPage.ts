import { Page, Locator, expect } from '@playwright/test';

export class BillingPage {

    readonly page: Page;

    // Left Navigation
    readonly billingMenu: Locator;

    // Billing Page
    readonly billingHeader: Locator;
    readonly createInvoiceButton: Locator;
    readonly searchInput: Locator;
    readonly billingTable: Locator;
    readonly noRecordsMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.billingMenu = page.locator("//span[contains(text(),'Billing')]");

        this.billingHeader = page.locator("//h1[contains(text(),'Billing')]");
        this.createInvoiceButton = page.locator("text=Create Invoice");
        this.searchInput = page.locator("//input[@placeholder='Search']");
        this.billingTable = page.locator("//table");
        this.noRecordsMessage = page.locator("text=No records found");
    }

    async openBilling() {
        await expect.soft(this.billingMenu, 'Billing menu should be visible').toBeVisible();
        await this.billingMenu.click();
    }

    async verifyBillingLoaded() {
        await expect.soft(this.billingHeader, 'Billing header should be visible').toBeVisible();
        await expect.soft(this.page, 'Billing URL should contain billing').toHaveURL(/billing/i);
    }

    async validateImportantFields() {
        await expect.soft(this.createInvoiceButton, 'Create Invoice button should be visible').toBeVisible();
        await expect.soft(this.searchInput, 'Search input should be visible').toBeVisible();

        const tableVisible = await this.billingTable.isVisible();
        if (tableVisible) {
            await expect.soft(this.billingTable, 'Billing table should be visible').toBeVisible();
        } else {
            await expect.soft(this.noRecordsMessage, 'No records message should be visible when table absent').toBeVisible();
        }
    }
}
